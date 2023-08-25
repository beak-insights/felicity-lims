from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class ReflexRuleRepository(IBaseRepository, ABC):
    ...


class ReflexBrainAdditionRepository(IBaseRepository, ABC):
    ...


class ReflexBrainFinalRepository(IBaseRepository, ABC):
    ...


class ReflexBrainCriteriaRepository(IBaseRepository, ABC):
    ...


class ReflexBrainRepository(IBaseRepository, ABC):
    ...


class ReflexActionRepository(IBaseRepository, ABC):
    ...
