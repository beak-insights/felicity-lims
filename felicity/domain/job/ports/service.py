from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.job.schemas import Job


class IJobService(IBaseService[Job], ABC):
    @abstractmethod
    async def backoff(self, minutes=5, max_retries=5):
        ...

    @abstractmethod
    async def fetch_sorted(self):
        ...

    @abstractmethod
    async def change_status(self, job: Job, new_status, change_reason=""):
        ...

    @abstractmethod
    async def increase_priority(self):
        ...

    @abstractmethod
    async def decrease_priority(self):
        ...
