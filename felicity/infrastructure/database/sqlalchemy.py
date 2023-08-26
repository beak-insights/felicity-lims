from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Column, String
from contextlib import AbstractContextManager
from typing import Callable

from core.setting import settings
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    create_async_engine, async_sessionmaker,
)
from core.uid_gen import get_flake_uid


class Database:
    def __init__(self):
        self._async_engine = create_async_engine(
            settings.SQLALCHEMY_ASYNC_DATABASE_URI,
            pool_pre_ping=True,
            echo=False,
            future=True,
        )
        self._async_session_factory = async_sessionmaker(
            bind=self._async_engine,
            expire_on_commit=False,
            autoflush=False,
        )

    def async_session(self) -> Callable[..., AbstractContextManager[AsyncSession]]:
        return self._async_session_factory


class DBModel(DeclarativeBase):
    __name__: str
    __abstract__ = True
    __mapper_args__ = {"eager_defaults": True}

    uid = Column(
        String,
        primary_key=True,
        index=True,
        nullable=False,
        default=get_flake_uid,
    )
