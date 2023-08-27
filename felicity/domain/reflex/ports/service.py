from abc import ABC, abstractmethod

from domain.analysis.schemas import AnalysisResult
from domain.reflex.schemas import (
    ReflexRule,
    ReflexBrainAddition,
    ReflexBrainFinal,
    ReflexBrainCriteria,
    ReflexBrain,
    ReflexAction,
)
from domain.shared.ports.service import IBaseService


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


class IReflexEngineService(ABC):
    @abstractmethod
    async def set_reflex_actions(self, analysis_results: list[AnalysisResult]) -> None:
        ...

    @abstractmethod
    async def do_reflex(self) -> None:
        ...

    @abstractmethod
    async def decide(self, brain: ReflexBrain) -> None:
        ...

    @abstractmethod
    async def siblings(self) -> list[AnalysisResult]:
        ...

    @abstractmethod
    async def cousins(self) -> list[AnalysisResult]:
        ...

    @abstractmethod
    async def create_analyte_for(self, analysis_uid) -> AnalysisResult:
        ...

    @abstractmethod
    async def create_final_for(self, analysis_uid, value) -> AnalysisResult:
        ...
