from typing import Optional, List
from datetime import datetime

from pydantic import BaseModel
from felicity.apps.setup.schemas import Department
from felicity.apps.user.schemas import User


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


#
# Document Schemas
#
class DocumentBase(BaseModel):
    name: Optional[str] = None
    subtitle: Optional[str] = None
    document_id: Optional[str] = None
    content: Optional[str] = None
    version: Optional[str] = None
    tags: Optional[List[DocumentTag]] = []
    authors: Optional[List[User]] = []
    readers: Optional[List[User]] = []
    department_uid: Optional[str] = None
    department: Optional[Department] = []
    category_uid: Optional[str] = None
    category: Optional[DocumentCategory] = []
    created_by_uid: Optional[str] = None
    modified_by_uid: Optional[str] = None
    date_archived: Optional[datetime] = None
    archived_by_uid: Optional[str] = None
    date_recalled: Optional[datetime] = None
    recalled_by_uid: Optional[str] = None
    date_effected: Optional[datetime] = None
    effected_by_uid: Optional[str] = None
    date_approved: Optional[datetime] = None
    approved_by_uid: Optional[str] = None
    last_accessed: Optional[datetime] = None
    last_accessed_by_uid: Optional[str] = None
    status: Optional[str] = None


class Document(DocumentBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


class DocumentCreate(DocumentBase):
    pass


class DocumentUpdate(DocumentBase):
    pass
