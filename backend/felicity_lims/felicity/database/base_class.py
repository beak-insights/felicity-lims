from typing import Dict, TypeVar, AsyncIterator, List, Any
import logging
from pydantic import BaseModel as PydanticBaseModel
from sqlalchemy.future import select
from sqlalchemy import Column, Integer
from sqlalchemy.sql import func
from sqlalchemy.orm import as_declarative, declared_attr
# from sqlalchemy_mixins import AllFeaturesMixin, TimestampsMixin
from felicity.database.async_mixins import AllFeaturesMixin, TimestampsMixin

from felicity.database.session import AsyncSessionLocal, AsyncSessionScoped

InDBSchemaType = TypeVar("InDBSchemaType", bound=PydanticBaseModel)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


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
class DBModel(AllFeaturesMixin, TimestampsMixin):
    __name__: str
    __abstract__ = True

    uid = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)

    # uid = Column(UUID(), default=uuid.uuid4, primary_key=True, unique=True, nullable=False)

    # Generate __tablename__ automatically
    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()

    @classmethod
    async def all_by_page(cls, page: int = 1, limit: int = 20, **kwargs) -> Dict:
        start = (page - 1) * limit
        end = start + limit

        stmt = cls.where(**kwargs).limit(limit).offset(start)
        results = await cls.session.execute(stmt)
        found = results.scalars().all()

        return found  # cls.query.slice(start, end).all()

    @classmethod
    async def get(cls, **kwargs):
        """Return the the first value in database based on given args.
        Example:
            User.get(id=5)
        """
        # stmt = select(cls).where(**kwargs)
        stmt = cls.where(**kwargs)
        results = await cls.session.execute(stmt)
        found = results.scalars().first()
        return found

    @classmethod
    def _import(cls, schema_in: InDBSchemaType):
        """Convert Pydantic schema to dict"""
        if isinstance(schema_in, dict):
            return schema_in
        data = schema_in.dict(exclude_unset=True)
        return data

    async def save(self):
        """Saves the updated model to the current entity db.
        """
        try:
            self.session.add(self)
            await self.session.flush()
            await self.session.commit()
        except Exception as e:
            await self.session.rollback()
            logger.info(f"Session Save Error: {e}")
            raise
        return self

    @classmethod
    async def get_one(cls, **kwargs):
        stmt = cls.where(**kwargs)
        results = await cls.session.execute(stmt)
        found = results.scalars().first()
        return found

    @classmethod
    async def fulltext_search(cls, search_string, field):
        """Full-text Search with PostgreSQL"""
        stmt = select(cls).filter(
            func.to_tsvector('english', getattr(cls, field)).match(search_string, postgresql_regconfig='english')
        )
        results = await cls.session.execute(stmt)
        search = results.scalars().all()
        return search

    @classmethod
    async def get_by_uids(cls,  uids: List[Any]) -> AsyncIterator[Any]:
        stmt = (
            select(cls)
            .where(cls.uid.in_(uids))  # type: ignore
        )
        stream = await cls.session.stream(stmt.order_by(cls.uid))
        async for row in stream:
            yield row

    @classmethod
    async def stream_all(cls) -> AsyncIterator[Any]:
        stmt = select(cls)
        stream = await cls.session.stream(stmt.order_by(cls.uid))
        async for row in stream:
            yield row

    @staticmethod
    def psql_records_to_dict(self, records, many=False):
        # records._row: asyncpg.Record / databases.backends.postgres.Record
        if not many and records:
            return dict(records)
        return [dict(record) for record in records]


DBModel.set_session(AsyncSessionScoped())