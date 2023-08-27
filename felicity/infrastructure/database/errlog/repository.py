from domain.shared.ports.repository import IBaseRepository

from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.errlog.entities import ErrorLog


class IErrorLogRepository(BaseRepository[ErrorLog], IBaseRepository):
    def __init__(self) -> None:
        self.model = ErrorLog
        super().__init__()
