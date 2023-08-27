from typing import Any, Protocol
from dataclasses import dataclass

from sanic import Sanic
from sanic.request import Request

from strawberry.http.temporal_response import TemporalResponse
from strawberry.types.info import Info as StrawberryInfo, RootValueType

from adapters.baje.service import JobWorker
from adapters.shared import BaseDependencyService
from domain.job.ports.repository import IJobRepository
from domain.job.ports.service import IJobService
from domain.job.services import JobService

from domain.user.services import (
    IUserService,
    UserService,
    IGroupService,
    GroupService,
    IPermissionService,
    PermissionService,
)
from infrastructure.database.job.repository import JobRepository
from infrastructure.database.user.repository import (
    IUserRepository,
    UserRepository,
    IGroupRepository,
    GroupRepository,
    IPermissionRepository,
    PermissionRepository,
)
from domain.user.schemas import User

# from infrastructure.database.sqlalchemy import Database
from infrastructure.database.repository.base import BaseRepository, IBaseRepository


@dataclass
class InfoContext:
    user: User
    request: Request
    response: TemporalResponse
    user_service: IUserService
    group_service: IGroupService
    permission_service: IPermissionService


Info = StrawberryInfo[InfoContext, RootValueType]


class IDependencyService(Protocol):
    async def get_gql_context(self, request: Request) -> Any:
        ...


class DependencyService(BaseDependencyService):
    def __init__(
        self,
        user_service: IUserService,
        group_service: IGroupService,
        permission_service: IPermissionService,
    ):
        self.user_service = user_service
        self.group_service = group_service
        self.permission_service = permission_service

    async def get_gql_context(self, request: Request) -> Any:
        ctx = await self.get_app_context(request)
        ctx["user_service"] = self.user_service
        ctx["group_service"] = self.group_service
        ctx["permission_service"] = self.permission_service
        return ctx


def register_dependencies(app: Sanic):
    # bases
    app.ext.add_dependency(IBaseRepository, BaseRepository)
    # user
    app.ext.add_dependency(IUserRepository, UserRepository)
    app.ext.add_dependency(IGroupRepository, GroupRepository)
    app.ext.add_dependency(IPermissionRepository, PermissionRepository)
    app.ext.add_dependency(IUserService, UserService)
    app.ext.add_dependency(IGroupService, GroupService)
    app.ext.add_dependency(IPermissionService, PermissionService)
    # job
    app.ext.add_dependency(IJobRepository, JobRepository)
    app.ext.add_dependency(IJobService, JobService)
    app.ext.add_dependency(JobWorker)
    # graphql context
    app.ext.add_dependency(IDependencyService, DependencyService)

    return app
