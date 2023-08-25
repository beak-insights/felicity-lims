"""Containers module."""

from dependency_injector import containers, providers

from domain.job.ports.repository import IJobRepository
from domain.job.ports.service import IJobService
from domain.job.services import JobService
from infrastructure.database.job.repository import JobRepository
from infrastructure.database.sqlalchemy import Database


class Container(containers.DeclarativeContainer):
    config = providers.Configuration()

    database = providers.Singleton(Database)

    job_repository = providers.Factory(IJobRepository, JobRepository, db=database)
    #
    job_service = providers.Factory(
        IJobService,
        JobService,
        repository=job_repository,
    )
