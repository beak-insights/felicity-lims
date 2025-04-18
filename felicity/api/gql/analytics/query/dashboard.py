import logging

import strawberry  # noqa
from strawberry.permission import PermissionExtension

from felicity.api.gql.analytics import types
from felicity.api.gql.permissions import IsAuthenticated, HasPermission
from felicity.apps.analysis.entities.analysis import Sample
from felicity.apps.analysis.entities.results import AnalysisResult
from felicity.apps.analysis.enum import ResultState, SampleState
from felicity.apps.analytics import EntityAnalyticsInit
from felicity.apps.guard import FAction, FObject
from felicity.apps.instrument.services import LaboratoryInstrumentService
from felicity.apps.user.services import UserService
from felicity.apps.worksheet.entities import WorkSheet
from felicity.apps.worksheet.enum import WorkSheetState
from felicity.utils import has_value_or_is_truthy

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def group_exists(val):
    if has_value_or_is_truthy(val):
        return str(val)
    return "unknown"


async def get_username(val):
    if val == "unknown":
        return val
    user = await UserService().get(uid=val)
    return user.user_name


async def get_instrument(val):
    if val == "unknown":
        return val
    instrument = await LaboratoryInstrumentService().get(uid=val)
    return instrument.lab_name


@strawberry.field(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.ANALYTICS)]
    )]
)
async def count_sample_group_by_status(info) -> types.GroupedCounts:
    analytics = EntityAnalyticsInit(Sample)
    state_in = [
        SampleState.SCHEDULED,
        SampleState.EXPECTED,
        SampleState.RECEIVED,
        SampleState.AWAITING,
        SampleState.APPROVED,
    ]
    results = await analytics.get_counts_group_by(
        "status", ("", ""), ("", ""), state_in
    )

    stats = []
    for row in results:
        stats.append(types.GroupCount(group=group_exists(row[0]), count=row[1]))

    return types.GroupedCounts(data=stats)


@strawberry.field(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.ANALYTICS)]
    )]
)
async def count_analyte_group_by_status(info) -> types.GroupedCounts:
    analytics = EntityAnalyticsInit(AnalysisResult)
    state_in = [
        ResultState.PENDING,
        ResultState.RESULTED,
    ]
    results = await analytics.get_counts_group_by(
        "status", ("", ""), ("", ""), state_in
    )

    stats = []
    for row in results:
        stats.append(types.GroupCount(group=group_exists(row[0]), count=row[1]))

    return types.GroupedCounts(data=stats)


@strawberry.field(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.ANALYTICS)]
    )]
)
async def count_extras_group_by_status(info) -> types.GroupedCounts:
    sample_analytics = EntityAnalyticsInit(Sample)
    sample_states = [
        SampleState.CANCELLED,
        SampleState.REJECTED,
        SampleState.INVALIDATED,
    ]
    sample_results = await sample_analytics.get_counts_group_by(
        "status", ("", ""), ("", ""), sample_states
    )

    result_analytics = EntityAnalyticsInit(AnalysisResult)
    result_states = [
        ResultState.RETRACTED,
    ]
    result_results = await result_analytics.get_counts_group_by(
        "status", ("", ""), ("", ""), result_states
    )

    retests = await result_analytics.count_analyses_retests(("", ""), ("", ""))

    stats = []
    for s_row in sample_results:
        stats.append(
            types.GroupCount(group=f"sample {group_exists(s_row[0])}", count=s_row[1])
        )

    for r_row in result_results:
        stats.append(
            types.GroupCount(group=f"analysis {group_exists(r_row[0])}", count=r_row[1])
        )

    if retests:
        val = retests[0][0]
        if val > 0:
            stats.append(types.GroupCount(group="analysis retested", count=val))

    return types.GroupedCounts(data=stats)


@strawberry.field(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.ANALYTICS)]
    )]
)
async def count_worksheet_group_by_status(info) -> types.GroupedCounts:
    analytics = EntityAnalyticsInit(WorkSheet)
    state_in = [
        WorkSheetState.EMPTY,
        WorkSheetState.AWAITING,
        WorkSheetState.PENDING,
    ]
    results = await analytics.get_counts_group_by("state", ("", ""), ("", ""), state_in)

    stats = []
    for row in results:
        stats.append(types.GroupCount(group=group_exists(row[0]), count=row[1]))

    return types.GroupedCounts(data=stats)


@strawberry.field(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.ANALYTICS)]
    )]
)
async def count_analyte_group_by_instrument(
        info, start_date: str | None = None, end_date: str | None = None
) -> types.GroupedCounts:
    analytics = EntityAnalyticsInit(AnalysisResult)
    results = await analytics.get_counts_group_by(
        "laboratory_instrument_uid",
        ("date_submitted", start_date),
        ("date_submitted", end_date),
    )

    stats = []
    for row in results:
        stats.append(
            types.GroupCount(group=get_instrument(group_exists(row[0])), count=row[1])
        )

    return types.GroupedCounts(data=stats)


@strawberry.field(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.ANALYTICS)]
    )]
)
async def count_sample_group_by_action(
        info, start_date: str | None = None, end_date: str | None = None
) -> types.GroupedData:
    analytics = EntityAnalyticsInit(Sample)
    created = await analytics.get_counts_group_by(
        "created_by_uid", ("created_at", start_date), ("created_at", end_date)
    )
    submitted = await analytics.get_counts_group_by(
        "submitted_by_uid", ("date_submitted", start_date), ("date_submitted", end_date)
    )
    verified = await analytics.get_counts_group_by(
        "verified_by_uid", ("date_verified", start_date), ("date_verified", end_date)
    )
    published = await analytics.get_counts_group_by(
        "published_by_uid", ("date_published", start_date), ("date_published", end_date)
    )

    stats = []
    registration = types.GroupData(group="registration", counts=[])
    for row in created:
        registration.counts.append(
            types.GroupCount(group=get_username(group_exists(row[0])), count=row[1])
        )
    stats.append(registration)

    submission = types.GroupData(group="submission", counts=[])
    for row in submitted:
        submission.counts.append(
            types.GroupCount(group=get_username(group_exists(row[0])), count=row[1])
        )
    stats.append(submission)

    verification = types.GroupData(group="verification", counts=[])
    for row in verified:
        verification.counts.append(
            types.GroupCount(group=get_username(group_exists(row[0])), count=row[1])
        )
    stats.append(verification)

    publication = types.GroupData(group="publication", counts=[])
    for row in published:
        publication.counts.append(
            types.GroupCount(group=get_username(group_exists(row[0])), count=row[1])
        )
    stats.append(publication)

    return types.GroupedData(data=stats)


@strawberry.field(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.ANALYTICS)]
    )]
)
async def sample_process_performance(
        info, start_date: str, end_date: str
) -> types.ProcessStatistics:
    analytics = EntityAnalyticsInit(Sample)
    received_to_published = await analytics.get_sample_process_performance(
        start=("date_received", start_date), end=("date_published", end_date)
    )
    received_to_submitted = await analytics.get_sample_process_performance(
        start=("date_received", start_date), end=("date_submitted", end_date)
    )
    submitted_to_verified = await analytics.get_sample_process_performance(
        start=("date_submitted", start_date), end=("date_verified", end_date)
    )
    verified_to_published = await analytics.get_sample_process_performance(
        start=("date_verified", start_date), end=("date_published", end_date)
    )

    final_data = []

    rtp_process = types.ProcessData(
        process="received_to_published", counts=None, groups=[]
    )
    for row in received_to_published:
        rtp_process.counts = types.ProcessCounts(
            total_samples=row[0],
            total_late=row[1],
            total_not_late=row[2],
            process_average=row[3],
            avg_extra_days=row[4],
        )
    final_data.append(rtp_process)

    rts_process = types.ProcessData(
        process="received_to_submitted", counts=None, groups=[]
    )
    for row in received_to_submitted:
        rts_process.counts = types.ProcessCounts(
            total_samples=row[0],
            total_late=row[1],
            total_not_late=row[2],
            process_average=row[3],
            avg_extra_days=row[4],
        )
    final_data.append(rts_process)

    stv_process = types.ProcessData(
        process="submitted_to_verified", counts=None, groups=[]
    )
    for row in submitted_to_verified:
        stv_process.counts = types.ProcessCounts(
            total_samples=row[0],
            total_late=row[1],
            total_not_late=row[2],
            process_average=row[3],
            avg_extra_days=row[4],
        )
    final_data.append(stv_process)

    stp_process = types.ProcessData(
        process="verified_to_published", counts=None, groups=[]
    )
    for row in verified_to_published:
        stp_process.counts = types.ProcessCounts(
            total_samples=row[0],
            total_late=row[1],
            total_not_late=row[2],
            process_average=row[3],
            avg_extra_days=row[4],
        )
    final_data.append(stp_process)

    return types.ProcessStatistics(data=final_data)


@strawberry.field(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.ANALYTICS)]
    )]
)
async def analysis_process_performance(
        info, process: str, start_date: str, end_date: str
) -> types.ProcessStatistics:
    analytics = EntityAnalyticsInit(Sample)
    processes = [
        "received_to_published",
        "received_to_submitted",
        "submitted_to_verified",
        "verified_to_published",
    ]
    if process not in processes:
        logger.warning(f"invalid process {process}")
        raise Exception(f"invalid process {process}")

    performance = []
    if process == "received_to_published":
        performance = await analytics.get_analysis_process_performance(
            start=("date_received", start_date), end=("date_published", end_date)
        )
    if process == "received_to_submitted":
        performance = await analytics.get_analysis_process_performance(
            start=("date_received", start_date), end=("date_submitted", end_date)
        )
    if process == "submitted_to_verified":
        performance = await analytics.get_analysis_process_performance(
            start=("date_submitted", start_date), end=("date_verified", end_date)
        )
    if process == "verified_to_published":
        performance = await analytics.get_analysis_process_performance(
            start=("date_verified", start_date), end=("date_published", end_date)
        )

    final_data = []

    rtp_process = types.ProcessData(process=process, counts=None, groups=[])

    for row in performance:
        rtp_process.groups.append(
            types.ProcessCounts(
                service=row[0],
                total_samples=row[1],
                total_late=row[2],
                total_not_late=row[3],
                process_average=row[4],
                avg_extra_days=row[5],
            )
        )
    final_data.append(rtp_process)

    return types.ProcessStatistics(data=final_data)


@strawberry.field(
    extensions=[PermissionExtension(
        permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.ANALYTICS)]
    )]
)
async def sample_laggards(info) -> types.LaggardStatistics:
    analytics = EntityAnalyticsInit(Sample)
    not_complete, complete = await analytics.get_laggards()

    final_data = []

    complete_laggards = types.LaggardData(
        category="authorised_already_delayed", counts=[]
    )
    for row in complete:
        complete_laggards.counts = types.LaggardCounts(
            total_delayed=row[0],
            lessThanTen=row[1],
            tenToTwenty=row[2],
            twentyToThirty=row[3],
            graterThanThirty=row[4],
        )
    final_data.append(complete_laggards)

    in_complete_laggards = types.LaggardData(
        category="delayed_and_incomplete", counts=[]
    )
    for row in not_complete:
        in_complete_laggards.counts = types.LaggardCounts(
            total_incomplete=row[0],
            total_delayed=row[1],
            total_not_delayed=row[2],
            lessThanTen=row[3],
            tenToTwenty=row[4],
            twentyToThirty=row[5],
            graterThanThirty=row[6],
        )
    final_data.append(in_complete_laggards)

    return types.LaggardStatistics(data=final_data)
