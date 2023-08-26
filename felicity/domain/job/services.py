from datetime import datetime, timedelta

from domain.job.ports.repository import IJobRepository
from domain.shared.services import BaseService
from domain.job.ports.service import IJobService
from domain.job.schemas import Job
from domain.job.conf import JobStates, JobPriorities


class JobService(BaseService[Job], IJobService):
    def __init__(self, repository: IJobRepository):
        self.repository = repository
        super().__init__(repository)

    async def backoff(self, job: Job, minutes: int = 5, max_retries: int = 5):
        bck = minutes * job.retries
        job.next_try = datetime.now() + timedelta(minutes=bck)

        if job.retries >= max_retries + 1:
            job.status = JobStates.FAILED
            job.reason = f"max retries have been exceeded: {max_retries}"

        job.retries += 1
        await self.repository.update(job, **self.marshal(job))

    async def fetch_sorted(self):
        return await self.repository.fetch_sorted()

    async def change_status(self, job: Job, new_status, change_reason=""):
        job.status = new_status
        job.reason = change_reason
        await self.repository.update(job, **self.marshal(job))

    async def increase_priority(self, job: Job):
        if job.priority < JobPriorities.HIGH:
            job.priority += 1
            await self.repository.update(job, **self.marshal(job))

    async def decrease_priority(self, job: Job):
        if job.priority > JobPriorities.NORMAL:
            job.priority -= 1
            await self.repository.update(job, **self.marshal(job))
