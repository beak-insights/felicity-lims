from typing import Optional

from pydantic import BaseModel


# 
# Document Schemas
# 
class DocumentBase(BaseModel):
    action: Optional[str] = None
    category: Optional[str] = ""
    priority: Optional[int] = ""
    job_id: Optional[str] = None
    status: Optional[str] = ""
    reason: Optional[str] = None


class Document(DocumentBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


class DocumentCreate(DocumentBase):
    pass


class DocumentUpdate(DocumentBase):
    pass


#
# DocumentTag Schemas
#
class DocumentTagBase(BaseModel):
    name: Optional[str] = ""


class DocumentTag(DocumentTagBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


class DocumentTagCreate(DocumentTagBase):
    pass


class DocumentTagUpdate(DocumentTagBase):
    pass


#
# DocumentCategory Schemas
#
class DocumentCategoryBase(BaseModel):
    name: Optional[str] = ""


class DocumentCategory(DocumentCategoryBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


class DocumentCategoryCreate(DocumentCategoryBase):
    pass


class DocumentCategoryUpdate(DocumentCategoryBase):
    pass
