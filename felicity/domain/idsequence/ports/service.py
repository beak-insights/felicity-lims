from abc import ABC, abstractmethod
from typing import TypeVar
from domain.shared.ports.service import IBaseService

IdSequence = TypeVar("IdSequence")


class IIdSequenceService(IBaseService[IdSequence], ABC):
    @abstractmethod
    async def get_next_number(
        self, prefix: str | None = None, generic: bool = False
    ) -> tuple[int, str]:
        pass
