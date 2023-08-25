import logging

import typing
from strawberry.permission import BasePermission
from adapters.graphql.dependencies import Info

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class IsAuthenticated(BasePermission):
    message = "Only accessible to authenticated users"

    async def has_permission(self, source: typing.Any, info: Info, **kwargs):
        return info.context.user


class IsActiveUser(BasePermission):
    message = "You must be an active user"

    async def has_permission(self, source: typing.Any, info: Info, **kwargs):
        user = info.context.user
        if not user:
            return False
        return user.is_active


class IsSuperUser(BasePermission):
    message = "You dont have enough privileges"

    async def has_permission(self, source: typing.Any, info: Info, **kwargs):
        user = info.context.user
        if not user:
            return False

        if not user.is_active:
            return False

        return user.is_superuser
