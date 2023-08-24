from domain.noticeboard.ports.repository import INoticeRepository
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.noticeboard.entities import Notice


class NoticeRespository(BaseRepository[Notice], INoticeRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Notice
        super().__init__(db)
