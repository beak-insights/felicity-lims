from typing import Any, Protocol
from dataclasses import dataclass

from sanic import Sanic
from sanic.request import Request

from strawberry.http.temporal_response import TemporalResponse
from strawberry.types.info import Info as StrawberryInfo, RootValueType

from adapters.shared import BaseDependencyService

from domain.shared.ports.persistance import PersistenceProtocol
from domain.user.services import (
    IUserService, UserService,
    IGroupService, GroupService,
    IUserPreferenceService, UserPreferenceService,
    IPermissionService, PermissionService,
)
from infrastructure.database.user.repository import (
    IUserRepository, UserRespository,
    IGroupRepository, GroupRespository,
    IUserPreferenceRepository, UserPreferenceRespository,
    IPermissionRepository, PermissionRespository,
)
from domain.user.schemas import User
from infrastructure.database.sqlalchemy import Database
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
        user_preference_service: IUserPreferenceService,
    ):
        self.user_service = user_service
        self.group_service = group_service
        self.permission_service = permission_service
        self.user_preference_service = user_preference_service  
        
    async def get_gql_context(self, request: Request) -> Any:
        ctx = await self.get_app_context(request)
        ctx["user_service"] = self.user_service
        ctx["group_service"] = self.group_service
        ctx["permission_service"] = self.permission_service
        ctx["user_preference_service"] = self.user_preference_service
        return ctx


def register_dependencies(app: Sanic):
    # database
    app.ext.add_dependency(PersistenceProtocol, Database)
    # bases
    app.ext.add_dependency(IBaseRepository, BaseRepository)
    # user repository dependencies
    app.ext.add_dependency(IUserRepository, UserRespository)
    app.ext.add_dependency(IGroupRepository, GroupRespository)
    app.ext.add_dependency(IPermissionRepository, PermissionRespository)
    app.ext.add_dependency(IUserPreferenceRepository, UserPreferenceRespository)
    # user service dependencies
    app.ext.add_dependency(IUserService, UserService)
    app.ext.add_dependency(IGroupService, GroupService)
    app.ext.add_dependency(IPermissionService, PermissionService)
    app.ext.add_dependency(IUserPreferenceService, UserPreferenceService)
    # graphql context 
    app.ext.add_dependency(IDependencyService, DependencyService)

