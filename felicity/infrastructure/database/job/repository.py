from domain.job.ports.repository import IJobRepository
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.job.entities import Job


class JobRespository(BaseRepository[Job], IJobRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Job
        super().__init__(db)
