from typing import Generic, TypeVar
from abc import ABC, abstractmethod
from domain.shared.ports.paginator.cursor import PageCursor

M = TypeVar("M")

class IBaseRepository(Generic[M], ABC):
    
    @abstractmethod
    async def all(self) -> list[M]:
        pass
        
    @abstractmethod
    async def get(self, **kwargs) -> M:
        pass

    @abstractmethod
    async def get_all(self, **kwargs) -> list[M]:
        pass
        
    @abstractmethod
    async def create(self, **kwargs) -> M:
        pass
        
    @abstractmethod
    async def update(self, model: M, **kwargs) -> M:
        pass
        
    @abstractmethod
    async def update_by_uid(self, uid: str, **kwargs) -> M:
        pass
    
    @abstractmethod
    async def bulk_update_with_mappings(self, mappings: list[dict]) -> None:
        pass
        
    @abstractmethod
    async def delete(self, model: M) -> None:
        pass
    
    @abstractmethod
    async def count_where(self, filters: dict) -> int: 
        pass
    
    @abstractmethod
    async def paginate(
        self,
        page_size: int | None,
        after_cursor: str | None,
        before_cursor: str | None,
        filters: dict | list[dict] | None,
        sort_by: list[str] | None,
        get_related: str = None,
    ) -> PageCursor:
        pass