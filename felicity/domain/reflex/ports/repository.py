from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class IReflexRuleRepository(IBaseRepository, ABC):
    ...


class IReflexBrainAdditionRepository(IBaseRepository, ABC):
    ...


class IReflexBrainFinalRepository(IBaseRepository, ABC):
    ...


class IReflexBrainCriteriaRepository(IBaseRepository, ABC):
    ...


class IReflexBrainRepository(IBaseRepository, ABC):
    ...


class IReflexActionRepository(IBaseRepository, ABC):
    ...
