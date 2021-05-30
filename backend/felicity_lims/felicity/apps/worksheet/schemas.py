from typing import Optional, Dict, List

from pydantic import BaseModel


# 
# WorkSheet Schemas
# 

# Shared properties
class WorkSheetBase(BaseModel):
    analyst_uid: Optional[int] = None
    template_uid: Optional[int] = None
    worksheet_id: Optional[str] = None
    instrument_uid: Optional[int] = None
    sample_type_uid: Optional[int] = None
    analyses_uid: Optional[int] = None
    reserved: Optional[Dict] = {}
    number_of_samples: Optional[int] = None
    worksheet_type: Optional[int] = 0
    rows: Optional[int] = None
    cols: Optional[int] = None
    row_wise: Optional[bool] = True
    template: Optional[Dict] = {}


class WorkSheetBaseInDB(WorkSheetBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


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
    name: Optional[str] = None
    description: Optional[str] = None
    instrument_uid: Optional[str] = None
    sample_type_uid: Optional[str] = None
    analyses: List[Optional[int]] = []
    qc_analyses: List[Optional[int]] = []
    reserved: Optional[Dict] = {}
    number_of_samples: Optional[str] = None
    worksheet_type: Optional[str] = 'flat'
    rows: Optional[str] = None
    cols: Optional[str] = None
    row_wise: Optional[bool] = True


class WSTemplateBaseInDB(WSTemplateBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


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
