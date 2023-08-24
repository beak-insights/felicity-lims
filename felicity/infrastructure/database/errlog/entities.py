
from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import JSONB


from infrastructure.database import BaseAuditDBModel


class ErrorLog(BaseAuditDBModel):
    content = Column(JSONB)
