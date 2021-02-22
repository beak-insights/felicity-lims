from typing import Dict, TypeVar

from pydantic import BaseModel as PydanticBaseModel
from sqlalchemy import Column, Integer
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import as_declarative, declared_attr
from sqlalchemy_mixins import AllFeaturesMixin

from felicity.database.session import SessionScoped

InDBSchemaType = TypeVar("InDBSchemaType", bound=PydanticBaseModel)


# noinspection PyPep8Naming
class classproperty(object):
    """
    @property for @classmethod
    taken from http://stackoverflow.com/a/13624858
    """

    def __init__(self, fget):
        self.fget = fget

    def __get__(self, owner_self, owner_cls):
        return self.fget(owner_cls)


# Enhanced Base Model Class with some django-like super powers
@as_declarative()
class DBModel(AllFeaturesMixin):
    __name__: str
    __abstract__ = True
    
    uid = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)
    # uid = Column(UUID(), default=uuid.uuid4, primary_key=True, unique=True, nullable=False)
    
    # Generate __tablename__ automatically
    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()

    @classmethod
    def all_by_page(cls, page: int = 1, limit: int = 20, **kwargs) -> Dict:
        start = (page - 1) * limit
        end = start + limit
        return cls.query.slice(start, end).all()

    @classmethod
    def get(cls, **kwargs):
        """Return the the first value in database based on given args.
        Example:
            User.get(id=5)
        """
        return cls.where(**kwargs).first()

    @classmethod
    def _import(cls, schema_in: InDBSchemaType):
        """Convert Pydantic schema to dict"""
        if isinstance(schema_in, dict):
            return schema_in
        data = schema_in.dict(exclude_unset=True)
        return data

    def save(self):
        """Saves the updated model to the current entity db.
        """
        try:
            self.session.add(self)
            self.session.flush()
            self.session.commit()
        except:
            self.session.rollback()
            raise
        return self
    
    @classmethod
    def get_one(cls, **kwargs):
        return cls.query.filter_by(**kwargs).first()
    
    @classmethod
    def fulltext_search(cls, search_string, field):
        """Full-text Search with PostgreSQL"""
        return cls.query.filter(func.to_tsvector('english', getattr(cls, field)).match(search_string, postgresql_regconfig='english')).all()

    
    def psql_records_to_dict(self, records, many=False):
        # records._row: asyncpg.Record / databases.backends.postgres.Record
        if not many and records:
            return dict(records)
        return [dict(record) for record in records]
    
    @classmethod
    def scalar(cls, filters):
        cls.query.scalar()

    # def get_multi(cls, *, skip: int = 0, limit: int = 100):
    #     return cls.objects.offset(skip).limit(limit).all()
    
DBModel.query = SessionScoped.query_property()
DBModel.set_session(SessionScoped())

