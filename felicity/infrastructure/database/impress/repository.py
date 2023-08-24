from domain.impress.ports.repository import IReportImpressRepository
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.impress.entities import ReportImpress


class ReportImpressRespository(BaseRepository[ReportImpress], IReportImpressRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ReportImpress
        super().__init__(db)
