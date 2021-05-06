from sqlalchemy import Column, String, Integer

from felicity.database.base_class import DBModel
from . import schemas


class DocumentCategory(DBModel):
    name = Column(String)

    @classmethod
    def create(cls, obj_in: schemas.DocumentCategoryCreate) -> schemas.DocumentCategory:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.DocumentCategoryUpdate) -> schemas.DocumentCategory:
        data = self._import(obj_in)
        return super().update(**data)


class DocumentTag(DBModel):
    name = Column(String)

    @classmethod
    def create(cls, obj_in: schemas.DocumentTagCreate) -> schemas.DocumentTag:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.DocumentTagUpdate) -> schemas.DocumentTag:
        data = self._import(obj_in)
        return super().update(**data)


class DocTags:
    pass


class DocAuthors:
    pass


class DocReads:
    pass


class Document(DBModel):
    name = Column(String)
    content = Column(String)
    version = Column(String)
    tags = Column(String)
    authors = Column(String)
    readers = Column(String)
    date_archived = Column(String)
    archived_by = Column(String)
    date_recalled = Column(String)
    recalled_by = Column(String)
    date_effected = Column(String)
    effected_by = Column(String)
    date_approved = Column(String)
    approved_by = Column(String)
    last_accessed = Column(String)
    last_accessed_by = Column(String)
    status = Column(String)

    @classmethod
    def create(cls, obj_in: schemas.DocumentCreate) -> schemas.Document:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.DocumentUpdate) -> schemas.Document:
        data = self._import(obj_in)
        return super().update(**data)
