from abc import ABC, abstractmethod
from typing import Generic, TypeVar

from pydantic import BaseModel

from domain.shared.ports.paginator.cursor import PageCursor

M = TypeVar("M")
PydanticModel = TypeVar("PydanticModel", bound=BaseModel)


class IBaseService(Generic[M], ABC):
    @abstractmethod
    async def paging_filter(
        self,
        page_size: int | None,
        after_cursor: str | None,
        before_cursor: str | None,
        text: str | None,
        sort_by: list[str] | None,
        **kwargs
    ) -> PageCursor:
        pass

    @abstractmethod
    async def search(self, **kwargs) -> list[M]:
        pass

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
    async def get_by_uids(self, uids: list[str]) -> list[M]:
        pass

    @abstractmethod
    async def create(self, **kwargs) -> M:
        pass

    @abstractmethod
    async def bulk_create(self, bulk: list[dict]) -> list[M]:
        pass

    @abstractmethod
    async def update(self, model: M, **kwargs) -> M:
        pass

    @abstractmethod
    async def update_by_uid(self, uid: str, **kwargs) -> M:
        pass

    @abstractmethod
    async def bulk_update_with_mappings(self, mappings: list[dict]) -> list[M]:
        pass

    @abstractmethod
    async def delete(self, uid: str) -> None:
        pass
