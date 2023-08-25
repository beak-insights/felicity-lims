from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.analytics.schemas import ReportMeta


class IReportMetaService(IBaseService[ReportMeta], ABC):
    @abstractmethod
    async def set_final(self, status: str, location: str | None = None):
        ...
