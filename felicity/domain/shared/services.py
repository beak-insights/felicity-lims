from typing import TypeVar, Generic, Any
from pydantic import BaseModel, ConfigDict
from datetime import datetime

from domain.shared.ports.paginator.cursor import PageCursor
from domain.shared.ports.repository import IBaseRepository
from domain.shared.ports.service import IBaseService

M = TypeVar("M")
PydanticModel = TypeVar("PydanticModel", bound=BaseModel)


class BaseService(Generic[M], IBaseService[M]):
    def __init__(self, repository: IBaseRepository) -> None:
        self.repository = repository

    async def paging_filter(
        self,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
        **kwargs
    ) -> PageCursor:
        return await self.repository.paginate_with_cursors(
            page_size, after_cursor, before_cursor, text, sort_by, **kwargs
        )

    async def search(self, **kwargs) -> list[M]:
        return await self.repository.search(**kwargs)

    async def all(self) -> list[M]:
        return await self.repository.all()

    async def get(self, **kwargs) -> M:
        return await self.repository.get(**kwargs)

    async def get_all(self, **kwargs) -> list[M]:
        return await self.repository.get_all(**kwargs)

    async def create(self, **kwargs) -> M:
        return await self.repository.create(**kwargs)

    async def bulk_create(self, bulk: list[dict]) -> None:
        pass

    async def update(self, uid: str, **kwargs) -> M:
        return await self.repository.update(uid, **kwargs)

    async def delete(self, uid: str) -> None:
        return await self.repository.delete(uid)

    def marshal(self, model: Any, exclude: list[str] | None = None) -> dict:

        if isinstance(model, BaseModel):
            return model.model_dump(exclude_unset=True)
        elif isinstance(model, dict):
            return model

        if hasattr(model, "__dict__"):
            if exclude is None:
                exclude = []
            exclude.append("_sa_instance_state")

            return_data = {}
            for k, v in model.__dict__.items():
                if k not in exclude and not callable(v):
                    if isinstance(v, datetime):
                        v = v.__str__()
                    return_data[k] = v
            return return_data

        return model
