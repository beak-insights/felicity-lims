from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.impress.schemas import ReportImpress


class IReportImpressService(IBaseService[ReportImpress], ABC):
    ...