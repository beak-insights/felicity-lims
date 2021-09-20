from typing import AsyncGenerator
from asyncio import current_task
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_scoped_session
from felicity.core.config import settings


async_engine = create_async_engine(settings.SQLALCHEMY_ASYNC_DATABASE_URI, pool_pre_ping=True, echo=False, future=True)
AsyncSessionLocal = sessionmaker(
    bind=async_engine,
    expire_on_commit=False,
    autoflush=False,
    class_=AsyncSession,
)
AsyncSessionScoped = async_scoped_session(AsyncSessionLocal, scopefunc=current_task)


#  Async Dependency
async def get_session() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        yield session


# or Async Dependency 2
async def get_db() -> AsyncGenerator:
    session = AsyncSessionLocal()
    try:
        yield session
        await session.commit()
    except AsyncSessionLocal as ex:
        await session.rollback()
        raise ex
    finally:
        await session.close()
