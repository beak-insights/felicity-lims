from typing import List, Optional
import strawberry

from felicity.gql.user.types import (
    UserType,
    PermissionType,
    GroupType,
)
from felicity.apps.user import models as user_models
from felicity.gql import deps


@strawberry.type
class UserQuery:
    @strawberry.field
    async def user_all(self, info) -> List[UserType]:
        return await user_models.User.all()

    @strawberry.field
    async def user_me(self, info, token: str) -> Optional[UserType]:
        return await deps.get_current_active_user(token=token)

    @strawberry.field
    async def user_by_email(self, info, email: str) -> Optional[UserType]:
        return await user_models.User.get_by_email(email=email)

    @strawberry.field
    async def group_all(self, info) -> List[GroupType]:
        return await user_models.Group.all()

    @strawberry.field
    async def group_by_uid(self, info, uid: int) -> Optional[GroupType]:
        return await user_models.Group.get(uid=uid)

    @strawberry.field
    async def permission_all(self, info) -> List[PermissionType]:
        return await user_models.Permission.all()

    @strawberry.field
    async def permission_by_uid(self, info, uid: int) -> Optional[PermissionType]:
        return await user_models.Permission.get(uid=uid)
