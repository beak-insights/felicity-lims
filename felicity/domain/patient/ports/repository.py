from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class IIdentificationRepository(IBaseRepository, ABC):
    ...


class IPatientIdentificationRepository(IBaseRepository, ABC):
    ...


class IPatientRepository(IBaseRepository, ABC):
    ...
