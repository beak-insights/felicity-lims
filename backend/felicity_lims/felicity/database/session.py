from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.scoping import scoped_session

from felicity.core.config import settings

# Sync DB
engine = create_engine(settings.SQLALCHEMY_DATABASE_URI, pool_pre_ping=True, echo=False)
SessionLocal = sessionmaker(
    autoflush=False,
    bind=engine
)
SessionScoped = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))
