from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository
from domain.job.schemas import Job


class IJobRepository(IBaseRepository[Job], ABC):
    async def fetch_sorted(self) -> list[Job]:
        ...
