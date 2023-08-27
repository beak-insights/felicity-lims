from abc import ABC, abstractmethod
from typing import Generic, TypeVar

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
    async def get_by_uids(self, uids: list[str]) -> list[M]:
        pass

    @abstractmethod
    async def get_related(self, uid: str, related: list[str]) -> M:
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
    async def delete(self, model: M) -> None:
        pass

    @abstractmethod
    async def count_where(self, filters: dict) -> int:
        pass

    @abstractmethod
    async def paginate_with_cursors(
            self,
            page_size: int | None,
            after_cursor: str | None,
            before_cursor: str | None,
            filters: dict | list[dict] | None,
            text: str | None,
            sort_by: list[str] | None,
            **kwargs
    ) -> PageCursor:
        pass

    @abstractmethod
    async def search(self, **kwargs) -> list[M]:
        pass
