from typing import TypeVar
from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.worksheet.schemas import WorkSheet, WSTemplate

T = TypeVar("T")


class IWorkSheetTemplateService(IBaseService[WSTemplate], ABC):
    ...
    

class IWorkSheetService(IBaseService[WorkSheet], ABC):
    @abstractmethod
    async def get_analysis_results(self) -> list[T]:
        ...
    
    @abstractmethod
    async def reset_assigned_count(self) -> WorkSheet:
        ...
    
    @abstractmethod
    async def change_state(self, state, updated_by_uid: str) -> WorkSheet:
        ...

    @abstractmethod
    async def has_processed_samples(self) -> bool:
        ...

    @abstractmethod
    async def submit(self, submitter) -> WorkSheet:
        ...

    @abstractmethod
    async def verify(self, verified_by) -> WorkSheet:
        ...
