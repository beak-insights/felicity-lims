from typing import Optional
from datetime import datetime

import strawberry

from felicity.gql.analysis.types.analysis import SampleType, AnalysisType
from felicity.gql.setup.types import MethodType, InstrumentType
from felicity.gql.user.types import UserType
from felicity.gql.worksheet.types import WorkSheetType


@strawberry.type
class AnalysisResultType:
    uid: int
    sample_uid: int
    sample: SampleType
    worksheet_uid: Optional[int]
    worksheet: Optional[WorkSheetType]
    worksheet_position: Optional[int]
    assigned: bool
    analysis_uid: Optional[int]
    analysis: Optional[AnalysisType]
    instrument_uid: Optional[int]
    instrument: Optional[InstrumentType]
    method_uid: Optional[int]
    method: Optional[MethodType]
    result: Optional[str]
    analyst_uid: Optional[int]
    submitted_by_uid: Optional[int]
    date_submitted: Optional[datetime]
    verified_by_uid: Optional[int]
    date_verified: Optional[datetime]
    invalidated_by_uid: Optional[int]
    date_invalidated: datetime
    retest: bool
    reportable: bool
    status: Optional[int]
    created_by_uid: Optional[int]
    created_by: Optional[UserType]
    updated_by_uid: Optional[int]
    updated_by: Optional[UserType]




