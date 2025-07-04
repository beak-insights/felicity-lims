import logging
from typing import List

import strawberry  # noqa
from strawberry.permission import PermissionExtension

from felicity.api.gql.analysis.permissions import CanVerifyAnalysisResult
from felicity.api.gql.analysis.types import results as r_types
from felicity.api.gql.auth import auth_from_info
from felicity.api.gql.permissions import IsAuthenticated, HasPermission
from felicity.api.gql.types import OperationError
from felicity.apps.analysis.services.analysis import SampleService
from felicity.apps.analysis.services.result import AnalysisResultService
from felicity.apps.analysis.tasks import verify_results, submit_results
from felicity.apps.analysis.utils import retest_from_result_uids
from felicity.apps.analysis.workflow.analysis_result import AnalysisResultWorkFlow
from felicity.apps.guard import FAction, FObject
from felicity.apps.iol.redis import task_guard
from felicity.apps.iol.redis.enum import TrackableObject
from felicity.apps.job import schemas as job_schemas
from felicity.apps.job.enum import JobAction, JobCategory, JobPriority, JobState
from felicity.apps.job.services import JobService
from felicity.apps.notification.enum import NotificationObject
from felicity.apps.notification.services import ActivityStreamService
from felicity.core.config import settings

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@strawberry.input
class ARResultInputType:
    uid: str
    result: str
    method_uid: str
    laboratory_instrument_uid: str
    reportable: bool | None = True


@strawberry.type
class ResultListingType:
    results: List[r_types.AnalysisResultType]


@strawberry.type
class ResultOperationType:
    is_background: bool
    results: List[r_types.AnalysisResultType] | None = None
    message: str | None = None


AnalysisResultResponse = strawberry.union(
    "AnalysisResultResponse",
    (ResultListingType, OperationError),  # noqa
    description="Union of possible outcomes when actioning samples",
)

AnalysisResultOperationResponse = strawberry.union(
    "AnalysisResultSubmitResponse",
    (ResultOperationType, OperationError),  # noqa
    description="Union of possible outcomes when submitting/verifying results",
)


@strawberry.mutation(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.SUBMIT, FObject.RESULT)]
    )]
)
async def submit_analysis_results(
        info,
        analysis_results: List[ARResultInputType],
        source_object: str,
        source_object_uid: str,
) -> AnalysisResultOperationResponse:
    felicity_user = await auth_from_info(info)

    if len(analysis_results) == 0:
        return OperationError(error="No Results to update are provided!")

    an_results = [result.__dict__ for result in analysis_results]

    # submit analysis results as jobs
    job_schema = job_schemas.JobCreate(  # noqa
        action=JobAction.RESULT_SUBMIT,
        category=JobCategory.RESULT,
        priority=JobPriority.MEDIUM,
        job_id="0",
        status=JobState.PENDING,
        creator_uid=felicity_user.uid,
        data=an_results,
    )

    job = await JobService().create(job_schema)
    if not settings.ENABLE_BACKGROUND_PROCESSING:
        await submit_results(job.uid)
        returns = await AnalysisResultService().get_by_uids([r.uid for r in analysis_results])
        return ResultOperationType(
            results=returns,
            is_background=settings.ENABLE_BACKGROUND_PROCESSING
        )

    for _ar in an_results:
        await task_guard.process(
            uid=_ar["uid"], object_type=TrackableObject.RESULT
        )

    if source_object == "worksheet" and source_object_uid:
        await task_guard.process(
            uid=source_object_uid, object_type=TrackableObject.WORKSHEET
        )
    elif source_object == "sample" and source_object_uid:
        await task_guard.process(
            uid=source_object_uid, object_type=TrackableObject.SAMPLE
        )

    return ResultOperationType(
        message="Your results are being submitted in the background.",
        is_background=settings.ENABLE_BACKGROUND_PROCESSING
    )


@strawberry.mutation(permission_classes=[IsAuthenticated, CanVerifyAnalysisResult])
async def verify_analysis_results(
        info, analyses: list[str], source_object: str, source_object_uid: str
) -> AnalysisResultOperationResponse:
    felicity_user = await auth_from_info(info)

    if len(analyses) == 0:
        return OperationError(error="No analyses to verify are provided!")

    job_schema = job_schemas.JobCreate(  # noqa
        action=JobAction.RESULT_APPROVE,
        category=JobCategory.RESULT,
        priority=JobPriority.MEDIUM,
        job_id="0",
        status=JobState.PENDING,
        creator_uid=felicity_user.uid,
        data=analyses,
    )
    job = await JobService().create(job_schema)

    if not settings.ENABLE_BACKGROUND_PROCESSING:
        await verify_results(job.uid)
        returns = await AnalysisResultService().get_by_uids(analyses)
        return ResultOperationType(
            results=returns,
            is_background=settings.ENABLE_BACKGROUND_PROCESSING
        )

    for uid in analyses:
        await task_guard.process(uid=uid, object_type=TrackableObject.RESULT)

    if source_object == "worksheet" and source_object_uid:
        await task_guard.process(
            uid=source_object_uid, object_type=TrackableObject.WORKSHEET
        )
    elif source_object == "sample" and source_object_uid:
        # TODO: ? we might not need to lock the sample
        await task_guard.process(
            uid=source_object_uid, object_type=TrackableObject.SAMPLE
        )

    return ResultOperationType(
        message="Your results are being verified in the background.",
        is_background=settings.ENABLE_BACKGROUND_PROCESSING
    )


@strawberry.mutation(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.UPDATE, FObject.RESULT)]
    )]
)
async def retract_analysis_results(info, analyses: list[str]) -> AnalysisResultResponse:
    felicity_user = await auth_from_info(info)

    if len(analyses) == 0:
        return OperationError(error="No analyses to retract are provided!")

    return_results = []
    for _ar_uid in analyses:
        a_result = await AnalysisResultService().get(uid=_ar_uid, related=["sample"])
        if not a_result:
            return OperationError(error=f"AnalysisResult with uid {_ar_uid} not found")

        retest, a_result = await AnalysisResultWorkFlow().retest(
            a_result.uid, retested_by=felicity_user, action="retract"
        )

        # monkeypatch -> notify of sample state
        sample = await SampleService().get(uid=a_result.sample_uid)
        await ActivityStreamService().stream(
            sample, felicity_user, sample.status, NotificationObject.SAMPLE
        )

        # if in worksheet then keep add retest to ws
        if a_result.worksheet_uid:
            retest.worksheet_uid = a_result.worksheet_uid
            retest.worksheet_position = a_result.worksheet_position
            retest.assigned = True
            retest = await AnalysisResultService().save(retest, related=["sample"])

        # add retest
        if retest:
            return_results.append(retest)

        # add original
        return_results.append(a_result)
    return ResultListingType(results=return_results)


@strawberry.mutation(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.RETEST, FObject.RESULT)]
    )]
)
async def retest_analysis_results(info, analyses: list[str]) -> AnalysisResultResponse:
    felicity_user = await auth_from_info(info)

    if len(analyses) == 0:
        return OperationError(error="No analyses to Retest are provided!")

    retests, originals = await retest_from_result_uids(analyses, felicity_user)

    # monkeypatch -> notify of sample state
    for result in originals:
        sample = await SampleService().get(uid=result.sample_uid)
        await ActivityStreamService().stream(
            sample, felicity_user, sample.status, NotificationObject.SAMPLE
        )
    _all = [
        (await AnalysisResultService().get(related=["sample"], uid=res.uid))
        for res in (retests + originals)
    ]
    return ResultListingType(results=_all)


@strawberry.mutation(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.CANCEL, FObject.RESULT)]
    )]
)
async def cancel_analysis_results(info, analyses: list[str]) -> AnalysisResultResponse:
    felicity_user = await auth_from_info(info)

    return_results = []

    if len(analyses) == 0:
        return OperationError(error="No analyses to Retest are provided!")

    for _ar_uid in analyses:
        a_result = await AnalysisResultService().get(uid=_ar_uid)
        if not a_result:
            return OperationError(error=f"AnalysisResult with uid {_ar_uid} not found")

        # must not belong to a worksheet
        if a_result.assigned:
            return_results.append(a_result)
            continue

        a_result = await AnalysisResultWorkFlow().cancel(
            a_result.uid, cancelled_by=felicity_user
        )
        if a_result:
            return_results.append(a_result)
    _all = [
        (await AnalysisResultService().get(related=["sample"], uid=res.uid))
        for res in return_results
    ]
    return ResultListingType(results=_all)


@strawberry.mutation(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.CANCEL, FObject.RESULT)]
    )]
)
async def re_instate_analysis_results(
        info, analyses: list[str]
) -> AnalysisResultResponse:
    felicity_user = await auth_from_info(info)

    return_results = []

    if len(analyses) == 0:
        return OperationError(error="No analyses to Reinstate are provided!")

    for _ar_uid in analyses:
        a_result = await AnalysisResultService().get(uid=_ar_uid)
        if not a_result:
            return OperationError(error=f"AnalysisResult with uid {_ar_uid} not found")

        a_result = await AnalysisResultWorkFlow().re_instate(
            a_result.uid, re_instated_by=felicity_user
        )
        if a_result:
            return_results.append(a_result)

    _all = [
        (await AnalysisResultService().get(related=["sample"], uid=res.uid))
        for res in return_results
    ]
    return ResultListingType(results=_all)
