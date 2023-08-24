from datetime import datetime

from sqlalchemy import Column, Integer, String, DateTime

from infrastructure.database.sqlalchemy import DBModel


class IdSequence(DBModel):
    prefix = Column(String, nullable=False, unique=True)
    number = Column(Integer, nullable=False)
    updated = Column(DateTime, default=datetime.utcnow,
                     onupdate=datetime.utcnow)
