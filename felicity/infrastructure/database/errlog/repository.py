from domain.shared.ports.repository import IBaseRepository
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.errlog.entities import ErrorLog


class ErrorLogRespository(BaseRepository[ErrorLog], IBaseRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ErrorLog
        super().__init__(db)
