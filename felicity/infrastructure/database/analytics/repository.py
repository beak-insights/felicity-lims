from domain.analyics.ports.repository import IReportMetaRepository

from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.analytics.entities import ReportMeta


class ReportMetaRepository(BaseRepository[ReportMeta], IReportMetaRepository):
    def __init__(self) -> None:
        self.model = ReportMeta
        super().__init__()
