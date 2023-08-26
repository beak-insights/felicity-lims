from dependency_injector import containers, providers

from adapters.baje.worker import JobWorker
from domain.job.ports.repository import IJobRepository
from domain.job.ports.service import IJobService
from domain.job.services import JobService
from infrastructure.database.job.repository import JobRepository
from infrastructure.database.sqlalchemy import Database


class Container(containers.DeclarativeContainer):
    config = providers.Configuration()
    database = providers.Singleton(Database)

    job_repository = providers.Callable(
        IJobRepository, JobRepository,
        db=database,
    )

    job_service = providers.Callable(
        IJobService, JobService,
        repository=job_repository,
    )

    worker_service = providers.Factory(
        JobWorker,
        job_service=job_service,
    )
