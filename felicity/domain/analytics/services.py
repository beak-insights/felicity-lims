
from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AleadyExistsError
from domain.analytics.ports.service import IReportMetaService
from domain.analytics.schemas import ReportMeta


class ReportMetaService(BaseService[ReportMeta], IReportMetaService):
    async def set_final(self, status: str, location: str | None = None):
        if self.status != conf.report_states.READY:
            self.location = location
            self.status = status
            self.temp = None
            await self.save()