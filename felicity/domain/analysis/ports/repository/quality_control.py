from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class QCSetRepository(IBaseRepository, ABC):
    ...

class QCReferenceRepository(IBaseRepository, ABC):
    ...

class QCLevelRepository(IBaseRepository, ABC):
    ...

class QCTemplateRepository(IBaseRepository, ABC):
    ...
