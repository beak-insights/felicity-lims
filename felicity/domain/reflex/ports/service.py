from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.reflex.schemas import (
    ReflexRule,
    ReflexBrainAddition,
    ReflexBrainFinal,
    ReflexBrainCriteria,
    ReflexBrain,
    ReflexAction,
)


class IReflexRuleService(IBaseService[ReflexRule], ABC):
    ...


class IReflexBrainAdditionService(IBaseService[ReflexBrainAddition], ABC):
    ...


class IReflexBrainFinalService(IBaseService[ReflexBrainFinal], ABC):
    ...


class IReflexBrainCriteriaService(IBaseService[ReflexBrainCriteria], ABC):
    ...


class IReflexBrainService(IBaseService[ReflexBrain], ABC):
    ...


class IReflexActionService(IBaseService[ReflexAction], ABC):
    ...
