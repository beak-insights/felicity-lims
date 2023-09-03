from abc import ABC, abstractmethod

from domain.job.schemas import Job
from domain.shared.ports.service import IBaseService


class IJobService(IBaseService[Job], ABC):
    @abstractmethod
    async def backoff(self, job: Job, minutes=5, max_retries=5) -> None:
        ...

    @abstractmethod
    async def fetch_sorted(self) -> list[Job]:
        ...

    @abstractmethod
    async def change_status(self, job: Job, new_status, change_reason="") -> None:
        ...

    @abstractmethod
    async def increase_priority(self) -> None:
        ...

    @abstractmethod
    async def decrease_priority(self) -> None:
        ...


class IJobWorkerService(ABC):
    @abstractmethod
    async def run_jobs_if_exists(self):
        pass

    @staticmethod
    async def unknown_action(action: str):
        pass
