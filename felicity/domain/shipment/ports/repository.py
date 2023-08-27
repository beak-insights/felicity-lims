from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class IReferralLaboratoryRepository(IBaseRepository, ABC):
    ...


class IShippedSampleRepository(IBaseRepository, ABC):
    ...


class IShipmentRepository(IBaseRepository, ABC):
    ...
