from typing import Dict, List, Optional

from domain.analysis.schemas import AnalysisBaseInDB, QCLevelInDB

from pydantic import BaseModel, ConfigDict

#
# WorkSheet Schemas
#


class WorkSheetBase(BaseModel):
    analyst_uid: str| None = None
    template_uid: str| None = None
    worksheet_id: str | None = None
    instrument_uid: str| None = None
    sample_type_uid: str| None = None
    analysis_uid: str| None = None
    analysis: Optional[AnalysisBaseInDB] = None
    reserved: Optional[dict] = {}
    number_of_samples: int | None = None
    worksheet_type: int | None = 0
    rows: int | None = None
    cols: int | None = None
    row_wise: bool| None = True
    template: Optional[dict] = {}
    state: str | None = None


class WorkSheetBaseInDB(WorkSheetBase):
    uid: str| None = None

    model_config = ConfigDict(from_attributes=True)

class WorkSheetCreate(WorkSheetBase):
    pass


class WorkSheetUpdate(WorkSheetBase):
    pass


class WorkSheet(WorkSheetBaseInDB):
    pass


class WorkSheetInDB(WorkSheetBaseInDB):
    pass


#
# WSTemplate Schemas
#
class WSTemplateBase(BaseModel):
    name: str | None = None
    description: str | None = None
    instrument_uid: str| None = None
    sample_type_uid: str| None = None
    analysis_uid: str| None = None
    analysis: Optional[AnalysisBaseInDB] = None
    qc_analyses: Optional[List[AnalysisBaseInDB]] = []
    qc_levels: Optional[List[QCLevelInDB]] = []
    reserved: Optional[dict] = {}
    number_of_samples: int | None = None
    worksheet_type: str | None = "flat"
    rows: int | None = None
    cols: int | None = None
    row_wise: bool| None = True


class WSTemplateBaseInDB(WSTemplateBase):
    uid: str| None = None

    model_config = ConfigDict(from_attributes=True)

class WSTemplateCreate(WSTemplateBase):
    pass


class WSTemplateUpdate(WSTemplateBase):
    pass


class WSTemplate(WSTemplateBaseInDB):
    pass


class WSTemplateInDB(WSTemplateBaseInDB):
    pass
