from abc import ABC, abstractmethod
from domain.shared.ports.repository import IBaseRepository


class AnalysisResultRepository(IBaseRepository, ABC):
    ...


class ResultMutationRepository(IBaseRepository, ABC):
    ...
