from domain.audit.ports.repository import IAuditLogRepository
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.audit.entities import AuditLog


class AuditLogRespository(BaseRepository[AuditLog], IAuditLogRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = AuditLog
        super().__init__(db)
