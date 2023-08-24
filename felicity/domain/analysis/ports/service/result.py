from typing import TypeVar
from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.analysis.schemas import AnalysisResult

T = TypeVar("T")


class IAnalysisResultService(IBaseService[AnalysisResult], ABC):
    @abstractmethod
    async def verifications(self): ...
    
    #@abstractmethod
    # async def last_verificator(self): ...

    @abstractmethod
    async def retest_result(self, retested_by, next_action="verify"): ...

    @abstractmethod
    async def assign(self, ws_uid, position, instrument_uid): ...

    @abstractmethod
    async def un_assign(self): ...

    @abstractmethod
    async def verify(self, verifier): ...

    @abstractmethod
    async def retract(self, retracted_by): ...

    @abstractmethod
    async def cancel(self, cancelled_by): ...

    @abstractmethod
    async def re_instate(self, sample, re_instated_by): ...

    @abstractmethod
    async def change_status(self, status): ...

    @abstractmethod
    async def hide_report(self): ...

    @abstractmethod
    async def filter_for_worksheet(
        cls,
        analyses_status: str,
        analysis_uid: str,
        sample_type_uid: list[str],
        limit: int,
    ) -> list[AnalysisResult]: ...
  
  
class IResultMutationService(IBaseService[T], ABC): ...