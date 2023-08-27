from abc import ABC, abstractmethod
from domain.shared.ports.repository import IBaseRepository


class IAnalysisResultRepository(IBaseRepository, ABC):
    ...


class IResultMutationRepository(IBaseRepository, ABC):
    ...
