from typing import Optional
import strawberry


@strawberry.type
class UserAuthType:
    uid: int
    user_name: str
    login_retry: int
    is_blocked: bool
    user_type: str


@strawberry.type
class UserType:
    uid: int
    first_name: Optional[str]
    last_name: Optional[str]
    email: Optional[str]
    mobile_phone: Optional[str]
    business_phone: Optional[str]
    is_active: bool
    is_superuser: bool
    auth_uid: Optional[int]
    auth: Optional[UserAuthType]


@strawberry.type
class PermissionType:
    uid: int
    action: Optional[str]
    target: Optional[str]
    active: Optional[bool]


@strawberry.type
class GroupType:
    uid: int
    name: Optional[str]
    members: Optional[UserType]
    permissions: Optional[PermissionType]
    active: Optional[bool]
