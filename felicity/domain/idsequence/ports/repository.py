from abc import ABC, abstractmethod
from typing import TypeVar

from domain.shared.ports.repository import IBaseRepository

IdSequence = TypeVar("IdSequence")


class IIdSequenceRepository(IBaseRepository[IdSequence], ABC):
    @abstractmethod
    async def next_number(self, prefix: str) -> int:
        pass
