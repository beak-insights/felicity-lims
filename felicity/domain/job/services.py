
from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AleadyExistsError
from domain.job.ports.service import IJobService
from domain.job.schemas import Job



class JobService(BaseService[Job], IJobService):
    async def backoff(self, minutes=5, max_retries=5):
        bck = minutes * self.retries
        self.next_try = datetime.now() + timedelta(minutes=bck)

        if self.retries >= max_retries + 1:
            self.status = conf.states.FAILED
            self.reason = f"max retries have been exceeded: {max_retries}"

        self.retries += 1
        await self.save()

    @property
    def is_ready_for_execution(self):
        current_time = datetime.now()
        return self.next_try <= current_time if self.next_try else True

    @classmethod
    async def fetch_sorted(cls):
        _jobs = Job.smart_query(
            filters={
                "status__notin": [
                    conf.states.FINISHED,
                    conf.states.FAILED,
                    conf.states.RUNNING,
                ]
            },
            sort_attrs=["-priority"],
        )
        jobs = await Job.from_smart_query(_jobs)
        return list(filter(lambda job: job.is_ready_for_execution, jobs))

    async def change_status(self, new_status, change_reason=""):
        self.status = new_status
        self.reason = change_reason
        await self.save()

    async def increase_priority(self):
        if self.priority < conf.priorities.HIGH:
            self.priority += 1
            await self.save()

    async def decrease_priority(self):
        if self.priority > conf.priorities.NORMAL:
            self.priority -= 1
            await self.save()
