from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class IQCSetRepository(IBaseRepository, ABC):
    ...


class IQCReferenceRepository(IBaseRepository, ABC):
    ...


class IQCLevelRepository(IBaseRepository, ABC):
    ...


class IQCTemplateRepository(IBaseRepository, ABC):
    ...
