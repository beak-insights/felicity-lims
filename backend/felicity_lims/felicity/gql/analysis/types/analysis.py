from typing import Optional, List
from datetime import datetime

import strawberry

from felicity.gql import PageInfo
from felicity.gql.client.types import ClientType
from felicity.gql.patient.types import PatientType
from felicity.gql.setup.types import DepartmentType
from felicity.gql.user.types import UserType


@strawberry.type
class SampleTypeTyp:
    uid: int
    name: str
    description: Optional[str]
    active: bool
    internal_use: bool
    abbr: str


@strawberry.type
class ProfileType:
    uid: int
    name: str
    description: Optional[str]
    keyword: Optional[str]
    tat_length_minutes: Optional[int]
    active: bool


@strawberry.type
class QCLevelType:
    uid: int
    level: str


@strawberry.type
class QCSetType:
    uid: int
    name: str
    note: str


@strawberry.type
class RejectionReasonType:
    uid: int
    reason: str


@strawberry.type
class AnalysisRequestType:
    uid: int
    patient_uid: int
    patient: PatientType
    client_uid: int
    client: ClientType
    request_id: str
    client_request_id: str
    internal_use: bool
    created_by_uid: Optional[int]
    created_by: Optional[UserType]
    updated_by_uid: Optional[int]
    updated_by: Optional[UserType]


@strawberry.type
class AnalysisRequestEdge:
    cursor: str
    node: AnalysisRequestType


@strawberry.type
class AnalysisRequestCursorPage:
    page_info: PageInfo
    edges: Optional[List[AnalysisRequestEdge]]
    items: Optional[List[AnalysisRequestType]]
    total_count: int


@strawberry.type
class SampleType:  # for Sample
    uid: int
    analysisrequest_uid: int
    analysisrequest: Optional[AnalysisRequestType]
    sampletype_uid: int
    sampletype: Optional[SampleTypeTyp]
    sample_id: str
    profiles: Optional[List[ProfileType]]
    analyses: Optional[List[ProfileType]]
    priority: int
    status: str
    assigned: bool
    submitted_by_uid: Optional[int]
    submitted_by: Optional[UserType]
    date_submitted: Optional[datetime]
    verified_by_uid: Optional[int]
    verified_by: Optional[UserType]
    date_verified: Optional[datetime]
    invalidated_by_uid: Optional[int]
    invalidated_by: Optional[UserType]
    date_invalidated: Optional[datetime]
    rejection_reasons: Optional[List[RejectionReasonType]]
    internal_use: bool
    # QC Samples
    qc_set_uid: Optional[int]
    qc_set: Optional[QCSetType]
    qc_level_uid: Optional[int]
    qc_level: Optional[QCLevelType]


@strawberry.type
class SampleEdge:
    cursor: str
    node: SampleType


@strawberry.type
class SampleCursorPage:
    page_info: PageInfo
    edges: Optional[List[SampleEdge]]
    items: Optional[List[SampleType]]
    total_count: int


@strawberry.type
class AnalysisCategoryType:
    uid: int
    name: str
    description: Optional[str]
    active: bool


@strawberry.type
class AnalysisType:
    uid: int
    name: str
    description: Optional[str]
    keyword: Optional[str]
    unit: Optional[str]
    profiles: Optional[List[ProfileType]]
    sampletypes: Optional[List[SampleTypeTyp]]
    category_uid: Optional[int]
    category: Optional[AnalysisCategoryType]
    tat_length_minutes: int
    sort_key: int
    internal_use: bool
    active: bool
    created_by_uid: Optional[int]
    created_by: Optional[UserType]
    updated_by_uid: Optional[int]
    updated_by: Optional[UserType]


@strawberry.type
class ResultOptionType:
    uid: int
    option_key: int
    value: str
    analysis_uid: int
    analysis: AnalysisType


@strawberry.type
class QCTemplateType:
    uid: int
    name: str
    description: Optional[str]
    departments: List[DepartmentType]
    qc_levels: List[QCLevelType]






