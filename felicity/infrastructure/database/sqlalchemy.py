from datetime import datetime
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Column, String

from asyncio import current_task

from core.setting import settings
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_scoped_session,
    create_async_engine,
)
from sqlalchemy.orm import sessionmaker
from core.uid_gen import get_flake_uid


class Database:
    def __init__(self):
        self._async_engine = create_async_engine(
            settings.SQLALCHEMY_ASYNC_DATABASE_URI,
            pool_pre_ping=True,
            echo=False,
            future=True,
        )
        self._async_session_factory = sessionmaker(
            bind=self._async_engine, 
            expire_on_commit=False, 
            autoflush=False, 
            class_=AsyncSession
        )
    
    
    def async_session(self) -> sessionmaker[AsyncSession]:
        return self._async_session_factory
    
    def async_scoped_session(self) -> async_scoped_session[AsyncSession]:
        return async_scoped_session(self._async_session_factory, scopefunc=current_task)


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