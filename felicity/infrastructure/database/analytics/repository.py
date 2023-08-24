from domain.analyics.ports.repository import IReportMetaRepository
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.analytics.entities import ReportMeta


class ReportMetaRespository(BaseRepository[ReportMeta], IReportMetaRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ReportMeta
        super().__init__(db)
