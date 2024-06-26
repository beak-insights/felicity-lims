import asyncio
import logging
from datetime import datetime, timedelta
from typing import List

import strawberry  # noqa

from felicity.api.gql.analysis.types import analysis as a_types
from felicity.api.gql.analysis.types import results as r_types
from felicity.api.gql.auth import auth_from_info, verify_user_auth
from felicity.api.gql.permissions import CanVerifySample, IsAuthenticated
from felicity.api.gql.types import (OperationError, OperationSuccess,
                                    SuccessErrorResponse)
from felicity.apps.analysis import schemas
from felicity.apps.analysis.conf import States
from felicity.apps.analysis.conf import priorities, states
from felicity.apps.analysis.models import analysis as analysis_models
from felicity.apps.analysis.models import results as result_models
from felicity.apps.billing.utils import bill_order
from felicity.apps.client import models as ct_models
from felicity.apps.job import models as job_models
from felicity.apps.job import schemas as job_schemas
from felicity.apps.job.conf import actions, categories, priorities
from felicity.apps.job.conf import states as job_states
from felicity.apps.notification.utils import FelicityStreamer
from felicity.apps.patient import models as pt_models
from felicity.apps.reflex.utils import ReflexUtil

streamer = FelicityStreamer()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@strawberry.input
class ARSampleInputType:
    sample_type: str
    profiles: List[str]
    analyses: List[str]
    date_collected: str


@strawberry.input
class SampleRejectInputType:
    uid: str
    reasons: List[str]
    other: str | None = ""


@strawberry.input
class SamplePublishInputType:
    uid: str
    action: str = ""


AnalysisRequestResponse = strawberry.union(
    "AnalysisRequestResponse",
    (a_types.AnalysisRequestWithSamples, OperationError),  # noqa
    description="Union of possible outcomes when adding/editing analysis " "requests ",
)


@strawberry.type
class ResultedSampleListingType:
    samples: List[r_types.SamplesWithResults]


ResultedSampleActionResponse = strawberry.union(
    "ResultedSampleActionResponse",
    (ResultedSampleListingType, OperationError),  # noqa
    description="Union of possible outcomes when actioning samples",
)


@strawberry.type
class SampleListingType:
    samples: List[r_types.SampleType]


SampleActionResponse = strawberry.union(
    "SampleActionResponse",
    (SampleListingType, OperationError),  # noqa
    description="Union of possible outcomes when actioning samples",
)


@strawberry.input
class AnalysisRequestInputType:
    patient_uid: str
    client_uid: str
    client_contact_uid: str
    clinicalData: str | None = ""
    samples: List[ARSampleInputType] = None
    client_request_id: str | None = None
    internal_use: bool | None = False
    priority: int = priorities.NORMAL


@strawberry.input
class ManageAnalysisInputType:
    cancel: List[str] = None
    add: List[str] = None


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def create_analysis_request(
        info, payload: AnalysisRequestInputType
) -> AnalysisRequestResponse:
    logger.info("Received request to create analysis request")

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can create analysis requests",
    )

    # are samples valid
    for _s in payload.samples:
        _valid = [len(_s.profiles) > 0, len(_s.analyses) > 0]
        if not any(_valid):
            return OperationError(
                error=f"Samples must have either analysis or profiles or both"
            )

    patient = await pt_models.Patient.get(uid=payload.patient_uid)
    if not patient:
        return OperationError(error=f"Patient with uid {payload.patient_uid} Not found")

    client = await ct_models.Client.get(uid=payload.client_uid)
    if not client:
        return OperationError(error=f"Client with uid {payload.client_uid} Not found")

    if len(payload.samples) == 0:
        return OperationError(error=f"Samples are required")

    # create the ar
    incoming = {
        "patient_uid": payload.patient_uid,
        "client_uid": payload.client_uid,
        "request_id": None,
        "client_request_id": payload.client_request_id,
        "created_by_uid": felicity_user.uid,
        "updated_by_uid": felicity_user.uid,
    }

    obj_in = schemas.AnalysisRequestCreate(**incoming)
    analysis_request: analysis_models.AnalysisRequest = (
        await analysis_models.AnalysisRequest.create(obj_in)
    )

    # 1. create samples
    logger.info(
        f"Adding {len(payload.samples)} samples to the analysis request {analysis_request.client_request_id}"
    )
    for s in payload.samples:
        _st_uid = s.sample_type
        stype = await analysis_models.SampleType.get(uid=_st_uid)
        if not stype:
            return OperationError(
                error=f"Error, failed to retrieve sample type {_st_uid}"
            )

        sample_in = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
            "analysis_request_uid": analysis_request.uid,
            "date_collected": s.date_collected,
            "sample_type_uid": _st_uid,
            "sample_id": None,
            "priority": payload.priority,
            "status": states.sample.EXPECTED,
        }

        profiles = []
        analyses = []
        _profiles_analyses = set()

        for p_uid in s.profiles:
            profile = await analysis_models.Profile.get_related(
                related=["analyses"], uid=p_uid
            )
            profiles.append(profile)
            analyses_ = profile.analyses
            for _an in analyses_:
                _profiles_analyses.add(_an)

        # make sure the selected analyses are not part of the selected profiles
        for a_uid in s.analyses:
            analysis = await analysis_models.Analysis.get(uid=a_uid)
            if analysis not in _profiles_analyses:
                analyses.append(analysis)
                _profiles_analyses.add(analysis)

        # determine sample due date
        tat_lengths = []
        for anal in _profiles_analyses:
            if anal.tat_length_minutes:
                tat_lengths.append(anal.tat_length_minutes)
        if tat_lengths:
            minutes = max(tat_lengths)
            sample_in["due_date"] = datetime.now() + timedelta(minutes=minutes)

        #
        sample_schema = schemas.SampleCreate(**sample_in)
        sample: analysis_models.Sample = await analysis_models.Sample.create(
            sample_schema
        )

        # auto receive samples
        # ?? sample_workflow based check needed
        await sample.receive(received_by=felicity_user)

        # link sample to provided profiles
        for _prof in profiles:
            await analysis_models.Sample.table_insert(
                table=analysis_models.sample_profile,
                mappings={"sample_uid": sample.uid, "profile_uid": _prof.uid},
            )

        # link sample to provided services
        for _anal in analyses:
            await analysis_models.Sample.table_insert(
                table=analysis_models.sample_analysis,
                mappings={"sample_uid": sample.uid, "analysis_uid": _anal.uid},
            )

        # create and attach result objects for each Analyses
        logger.info(
            f"Adding {len(_profiles_analyses)} service results to the sample {sample.sample_id}"
        )
        a_result_schema = schemas.AnalysisResultCreate(
            sample_uid=sample.uid,
            status=states.result.PENDING,
            analysis_uid=None,
            due_date=None,
            created_by_uid=felicity_user.uid,
            updated_by_uid=felicity_user.uid,
        )
        result_schemas = []
        for _service in _profiles_analyses:
            result_schemas.append(
                a_result_schema.model_copy(
                    update={
                        "analysis_uid": _service.uid,
                        "due_date": datetime.now()
                                    + timedelta(minutes=_service.tat_length_minutes)
                        if _service.tat_length_minutes
                        else None,
                    }
                )
            )
        created = await result_models.AnalysisResult.bulk_create(result_schemas)

        # initialise reflex action if exist
        logger.debug(f"ReflexUtil .... set_reflex_actions ...")
        await ReflexUtil.set_reflex_actions(created)

    # ! paramount !
    await asyncio.sleep(1)

    analysis_request = await analysis_models.AnalysisRequest.get_related(
        uid=analysis_request.uid, related=["samples"]
    )

    #
    await bill_order(analysis_request, auto_bill=True)

    return a_types.AnalysisRequestWithSamples(**analysis_request.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def clone_samples(info, samples: List[str]) -> SampleActionResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated, felicity_user, "Only Authenticated user can clone samples"
    )

    if len(samples) == 0:
        return OperationError(error=f"No Samples to clone are provided!")

    clones = []
    to_clone: List[analysis_models.Sample] = await analysis_models.Sample.get_by_uids(
        uids=samples
    )
    for _, _sample in enumerate(to_clone):
        clone = await _sample.clone_afresh(felicity_user)

        if clone:
            clones.append(clone)

            # create associated analysis
            _profiles_analyses = set()

            for _prof in clone.profiles:
                analyses_ = _prof.analyses
                for _an in analyses_:
                    _profiles_analyses.add(_an)

            for _anal in clone.analyses:
                if _anal not in _profiles_analyses:
                    _profiles_analyses.add(_anal)

            for _service in _profiles_analyses:
                a_result_in = {
                    "sample_uid": clone.uid,
                    "analysis_uid": _service.uid,
                    "status": states.result.PENDING,
                }
                a_result_schema = schemas.AnalysisResultCreate(**a_result_in)
                created = await result_models.AnalysisResult.create(a_result_schema)
                await ReflexUtil.set_reflex_actions([created])

    return SampleListingType(samples=clones)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def cancel_samples(info, samples: List[str]) -> ResultedSampleActionResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated, felicity_user, "Only Authenticated user can cancel samples"
    )

    return_samples = []

    if len(samples) == 0:
        return OperationError(error=f"No Samples to cancel are provided!")

    for _sa_uid in samples:
        sample: analysis_models.Sample = await analysis_models.Sample.get(uid=_sa_uid)
        if not sample:
            return OperationError(error=f"Sample with uid {_sa_uid} not found")

        # only samples with unassigned analyses can be cancelled
        analysis_results = await sample.get_analysis_results()
        match = [result.assigned for result in analysis_results]
        if any(match):
            return_samples.append(sample)
            continue

        sample = await sample.cancel(cancelled_by=felicity_user)
        if sample:
            return_samples.append(sample)

    return ResultedSampleListingType(samples=return_samples)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def re_instate_samples(info, samples: List[str]) -> ResultedSampleActionResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can re instate cancelled samples",
    )

    return_samples = []

    if len(samples) == 0:
        return OperationError(error=f"No Samples to re instate are provided!")

    for _sa_uid in samples:
        sample: analysis_models.Sample = await analysis_models.Sample.get(uid=_sa_uid)
        if not sample:
            return OperationError(error=f"Sample with uid {_sa_uid} not found")

        sample = await sample.re_instate(re_instated_by=felicity_user)
        if sample:
            return_samples.append(sample)

    return ResultedSampleListingType(samples=return_samples)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def receive_samples(info, samples: List[str]) -> ResultedSampleActionResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can receive due samples",
    )

    return_samples = []

    if len(samples) == 0:
        return OperationError(error=f"No Samples to receive are provided!")

    for _sa_uid in samples:
        sample: analysis_models.Sample = await analysis_models.Sample.get(uid=_sa_uid)
        if not sample:
            return OperationError(error=f"Sample with uid {_sa_uid} not found")

        sample = await sample.receive(received_by=felicity_user)
        if sample:
            return_samples.append(sample)

    return ResultedSampleListingType(samples=return_samples)


@strawberry.mutation(permission_classes=[CanVerifySample])
async def verify_samples(info, samples: List[str]) -> SampleActionResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated, felicity_user, "Only Authenticated user can verify samples"
    )

    return_samples = []

    if len(samples) == 0:
        return OperationError(error=f"No Samples to verify are provided!")

    for _sa_uid in samples:
        sample = await analysis_models.Sample.get(uid=_sa_uid)
        if not sample:
            return OperationError(error=f"Sample with uid {_sa_uid} not found")

        _, sample = await sample.verify(verified_by=felicity_user)
        if sample:
            return_samples.append(sample)

    return SampleListingType(samples=return_samples)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def reject_samples(
        info, samples: List[SampleRejectInputType]
) -> SampleActionResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated, felicity_user, "Only Authenticated user can reject samples"
    )

    return_samples = []

    if len(samples) == 0:
        return OperationError(error=f"No Samples to verify are provided!")

    for _sam in samples:
        sample: analysis_models.Sample = await analysis_models.Sample.get(uid=_sam.uid)
        if not sample:
            return OperationError(error=f"Sample with uid {_sam.uid} not found")

        for re_uid in _sam.reasons:
            reason = await analysis_models.RejectionReason.get(uid=re_uid)
            if not reason:
                return OperationError(
                    error=f"RejectionReason with uid {re_uid} not found"
                )

            # TODO: Transactions
            sample = await sample.reject(rejected_by=felicity_user)
            await analysis_models.Sample.table_insert(
                analysis_models.sample_rejection_reason,
                {"sample_uid": sample.uid, "rejection_reason_uid": reason.uid},
            )

            if sample:  # noqa
                return_samples.append(sample)

                if sample.status == states.sample.REJECTED:
                    for analyte in sample.analysis_results:
                        await analyte.cancel(cancelled_by=felicity_user)

    return SampleListingType(samples=return_samples)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def publish_samples(
        info, samples: List[SamplePublishInputType]
) -> SuccessErrorResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can impress samples",
    )

    if len(samples) == 0:
        return OperationError(error=f"No samples to impress are provided!")

    # set status of these samples to PUBLISHING for those whose action is "publish" !important
    final_publish = list(filter(lambda p: p.action == "publish", samples))
    not_final = list(filter(lambda p: p.action != "publish", samples))
    await analysis_models.Sample.bulk_update_with_mappings(
        [
            {"uid": sample.uid, "status": states.sample.PUBLISHING}
            for sample in final_publish
        ]
    )

    data = [{"uid": s.uid, "action": s.action} for s in samples]  # noqa
    job_schema = job_schemas.JobCreate(
        action=actions.IMPRESS_REPORT,
        category=categories.IMPRESS,
        priority=priorities.NORMAL,
        job_id="0",
        status=job_states.PENDING,
        creator_uid=felicity_user.uid,
        data=data,
    )

    await job_models.Job.create(job_schema)

    # !important for frontend
    # unfreeze frontend and return sample to original state since it is a non final publish
    ns_samples = await analysis_models.Sample.get_by_uids([nf.uid for nf in not_final])
    for sample in ns_samples:
        await streamer.stream(sample, felicity_user, sample.status, "sample")

    return OperationSuccess(
        message="Your results are being published in the background."
    )


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def print_samples(info, samples: List[str]) -> SampleActionResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can re print samples",
    )

    return_samples = []

    if len(samples) == 0:
        return OperationError(error=f"No Samples to print are provided!")

    for _sa_uid in samples:
        sample: analysis_models.Sample = await analysis_models.Sample.get(uid=_sa_uid)
        if not sample:
            return OperationError(error=f"Sample with uid {_sa_uid} not found")

        sample = await sample.print(printed_by=felicity_user)
        if sample:
            return_samples.append(sample)

    return SampleListingType(samples=return_samples)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def invalidate_samples(info, samples: List[str]) -> SampleActionResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can re invalidate samples",
    )

    return_samples = []

    if len(samples) == 0:
        return OperationError(error=f"No Samples to invalidate are provided!")

    for _sa_uid in samples:
        sample: analysis_models.Sample = await analysis_models.Sample.get(uid=_sa_uid)
        if not sample:
            return OperationError(error=f"Sample with uid {_sa_uid} not found")

        copy, invalidated = await sample.invalidate(invalidated_by=felicity_user)

        # add invalidated
        if invalidated:
            return_samples.append(invalidated)

        # add copy and create analytes
        if copy:
            return_samples.append(copy)

            # create associated analysis
            _profiles_analyses = set()

            for _prof in copy.profiles:
                analyses_ = _prof.analyses
                for _an in analyses_:
                    _profiles_analyses.add(_an)

            for _anal in copy.analyses:
                if _anal not in _profiles_analyses:
                    _profiles_analyses.add(_anal)

            for _service in _profiles_analyses:
                a_result_in = {
                    "sample_uid": copy.uid,
                    "analysis_uid": _service.uid,
                    "status": states.result.PENDING,
                }
                a_result_schema = schemas.AnalysisResultCreate(**a_result_in)
                await result_models.AnalysisResult.create(a_result_schema)

    return SampleListingType(samples=return_samples)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def samples_apply_template(info, uid: str, analysis_template_uid: str) -> ResultedSampleActionResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can add analyses to samples",
    )

    sample = await analysis_models.Sample.get(uid=uid)
    if sample.status not in [states.sample.RECEIVED, states.sample.AWAITING, states.sample.APPROVED]:
        return OperationError(error=f"Samples in {sample.status} can not be added analyses")

    template = await analysis_models.AnalysisTemplate.get(uid=analysis_template_uid)

    pending_results = await result_models.AnalysisResult.get_all(
        sample_uid=sample.uid,
        status=States.Result.PENDING,
        worksheet_uid=None
    )
    pending_uids = [pr.analysis_uid for pr in pending_results]

    # create and attach result objects for each Analyses
    logger.info(
        f"Adding {len(template.analyses)} service results to the sample {sample.sample_id}"
    )
    a_result_schema = schemas.AnalysisResultCreate(
        sample_uid=sample.uid,
        status=states.result.PENDING,
        analysis_uid=None,
        due_date=None,
        created_by_uid=felicity_user.uid,
        updated_by_uid=felicity_user.uid,
    )
    result_schemas = []
    for _service in template.analyses:
        if _service.uid not in pending_uids:
            result_schemas.append(
                a_result_schema.model_copy(
                    update={
                        "analysis_uid": _service.uid,
                        "due_date": datetime.now() + timedelta(minutes=_service.tat_length_minutes)
                        if _service.tat_length_minutes
                        else None,
                    }
                )
            )
    await result_models.AnalysisResult.bulk_create(result_schemas)

    if sample.status != states.sample.RECEIVED:
        await sample.change_status(status=states.sample.RECEIVED, updated_by_uid=felicity_user.uid)

    sample = await analysis_models.Sample.get(uid=uid)
    return ResultedSampleListingType(samples=[sample])


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def manage_analyses(info, sample_uid: str, payload: ManageAnalysisInputType) -> ResultedSampleActionResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can manage analyses to samples",
    )

    sample = await analysis_models.Sample.get(uid=sample_uid)
    if sample.status not in [states.sample.RECEIVED, states.sample.AWAITING, states.sample.APPROVED]:
        return OperationError(error=f"Samples in {sample.status} can not be added analyses")

    # cancel
    for _anal in payload.cancel:
        result = await result_models.AnalysisResult.get(uid=_anal)
        await result.cancel(cancelled_by=felicity_user)

    # create and attach result objects for each added Analyses
    logger.info(
        f"Adding {len(payload.add)} extra service results to the sample {sample.sample_id}"
    )
    a_result_schema = schemas.AnalysisResultCreate(
        sample_uid=sample.uid,
        status=states.result.PENDING,
        analysis_uid=None,
        due_date=None,
        created_by_uid=felicity_user.uid,
        updated_by_uid=felicity_user.uid,
    )
    result_schemas = []
    for _service_uid in payload.add:
        service = await analysis_models.Analysis.get(uid=_service_uid)
        result_schemas.append(
            a_result_schema.model_copy(
                update={
                    "analysis_uid": service.uid,
                    "due_date": datetime.now() + timedelta(minutes=service.tat_length_minutes)
                    if service.tat_length_minutes
                    else None,
                }
            )
        )
    await result_models.AnalysisResult.bulk_create(result_schemas)

    if sample.status != states.sample.RECEIVED:
        await sample.change_status(status=states.sample.RECEIVED, updated_by_uid=felicity_user.uid)

    sample = await analysis_models.Sample.get(uid=sample_uid)
    return ResultedSampleListingType(samples=[sample])
