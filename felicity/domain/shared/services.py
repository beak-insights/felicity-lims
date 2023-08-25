from typing import TypeVar, Generic, Any
from pydantic import BaseModel, ConfigDict
from datetime import datetime
from domain.shared.ports.repository import IBaseRepository
from domain.shared.ports.service import IBaseService

M = TypeVar("M")
PydanticModel = TypeVar("PydanticModel", bound=BaseModel)


class BaseService(Generic[M], IBaseService[M]):
    def __init__(self, repository: IBaseRepository) -> None:
        self.repository = repository

    async def all(self) -> list[M]:
        return await self.repository.all()

    async def get(self, **kwargs) -> M:
        return await self.repository.get(**kwargs)

    async def get_all(self, **kwargs) -> list[M]:
        return await self.repository.get_all(**kwargs)

    async def create(self, **kwargs) -> M:
        return await self.repository.create(**kwargs)

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
