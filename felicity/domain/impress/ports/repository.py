from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class IReportImpressRepository(IBaseRepository, ABC):
    ...
