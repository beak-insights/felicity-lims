from datetime import datetime

from pydantic import BaseModel, ConfigDict

from felicity.apps.analysis.schemas import AnalysisBasic
from felicity.apps.analytics.enum import ReportState, ReportTypes
from felicity.apps.user.schemas import UserBasic


class ReportMetaBase(BaseModel):
    period_start: datetime
    period_end: datetime
    date_column: str
    sample_states: str | None = None
    report_type: str = ReportTypes.LINE_LISTING
    status: str | None = ReportState.PENDING
    analyses: list[AnalysisBasic] | None = None
    created_at: datetime | None = None
    created_by_uid: str | None = None
    created_by: UserBasic | None = None  # noqa
    updated_at: datetime | None = None
    updated_by_uid: str | None = None
    updated_by: UserBasic | None = None  # noqa


class ReportMeta(ReportMetaBase):
    uid: str | None = None
    location: str | None = None

    model_config = ConfigDict(from_attributes=True)


class ReportMetaCreate(ReportMetaBase):
    temp: str
    created_by_uid: str
    updated_by_uid: str


class ReportMetaUpdate(ReportMetaBase):
    pass


class ReportMetaDeleted(BaseModel):
    uid: str
    message: str


class ReportRequest(BaseModel):
    report_type: str
    analyses_uids: list[str]
    sample_states: list[str]
    date_column: str
    period_start: datetime
    period_end: datetime
