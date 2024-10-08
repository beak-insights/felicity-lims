from dataclasses import field
from typing import List, Optional

from pydantic import BaseModel, ConfigDict

from felicity.apps.analysis.schemas import AnalysisBaseInDB, QCLevelInDB

#
# WorkSheet Schemas
#

# Shared properties


class WorkSheetBase(BaseModel):
    analyst_uid: str | None = None
    template_uid: str | None = None
    worksheet_id: str | None = None
    instrument_uid: str | None = None
    sample_type_uid: str | None = None
    analysis_uid: str | None = None
    analysis: Optional[AnalysisBaseInDB] = None
    reserved: Optional[dict] = None
    number_of_samples: int | None = None
    worksheet_type: int | None = 0
    rows: int | None = None
    cols: int | None = None
    row_wise: bool | None = True
    template: Optional[dict] = {}
    state: str | None = None


class WorkSheetBaseInDB(WorkSheetBase):
    uid: str | None = None

    model_config = ConfigDict(from_attributes=True)


# Properties to receive via API on creation
class WorkSheetCreate(WorkSheetBase):
    pass


# Properties to receive via API on update
class WorkSheetUpdate(WorkSheetBase):
    pass


# Properties to return via API
class WorkSheet(WorkSheetBaseInDB):
    pass


# Properties stored in DB
class WorkSheetInDB(WorkSheetBaseInDB):
    pass


#
# WSTemplate Schemas
#


# Shared properties
class WSTemplateBase(BaseModel):
    name: str | None = None
    description: str | None = None
    instrument_uid: str | None = None
    sample_type_uid: str | None = None
    analysis_uid: str | None = None
    analysis: Optional[AnalysisBaseInDB] = None
    qc_analyses: Optional[List[AnalysisBaseInDB]] = field(default_factory=list)
    qc_levels: Optional[List[QCLevelInDB]] = field(default_factory=list)
    reserved: Optional[dict] = None
    number_of_samples: int | None = None
    worksheet_type: str | None = "flat"
    rows: int | None = None
    cols: int | None = None
    row_wise: bool | None = True


class WSTemplateBaseInDB(WSTemplateBase):
    uid: str | None = None

    model_config = ConfigDict(from_attributes=True)


# Properties to receive via API on creation
class WSTemplateCreate(WSTemplateBase):
    pass


# Properties to receive via API on update
class WSTemplateUpdate(WSTemplateBase):
    pass


# Properties to return via API
class WSTemplate(WSTemplateBaseInDB):
    pass


# Properties stored in DB
class WSTemplateInDB(WSTemplateBaseInDB):
    pass
