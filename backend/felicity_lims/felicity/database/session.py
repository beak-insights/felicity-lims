import databases
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session

from felicity.core.config import settings

# Async DB
database = databases.Database(settings.SQLALCHEMY_DATABASE_URI)

# Sync DB
engine = create_engine(settings.SQLALCHEMY_DATABASE_URI, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
SessionScoped = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))
