from typing import List, Optional
from pydantic import BaseModel, ConfigDict, EmailStr

from domain.shared.schemas import BaseAuditModel

from domain.setup.schemas import Department
from domain.user.conf import Themes


#
#  Permission Schema
#

class PermissionBase(BaseModel):
    action: str | None = None
    target: str | None = None
    active: bool = False


class PermissionCreate(PermissionBase):
    pass


class PermissionUpdate(PermissionBase):
    uid: str| None = None


class PermissionInDBBase(PermissionBase):
    uid: str| None = None

    model_config = ConfigDict(from_attributes=True)

class Permission(PermissionInDBBase):
    pass


class PermissionInDB(PermissionInDBBase):
    pass


#
#  Group Schema
#

class GroupBase(BaseModel):
    name: str | None = None
    keyword: str | None = None
    permissions: Optional[List[Permission]] = None
    pages: str | None = None
    active: bool = False


class GroupCreate(GroupBase):
    pass


class GroupUpdate(GroupBase):
    uid: str| None = None


class GroupInDBBase(GroupBase):
    uid: str| None = None

    model_config = ConfigDict(from_attributes=True)

class Group(GroupInDBBase):
    pass


class GroupInDB(GroupInDBBase):
    pass


class GroupPermission(BaseModel):
    permission: Permission
    group: Group

#
#  User Preferences
#
class UserPreferenceBase(BaseAuditModel):
    expanded_menu: bool| None = False
    departments: Optional[List["Department"]]
    theme: str | None = Themes.LIGHT


class UserPreference(UserPreferenceBase):
    uid: str| None = None

    model_config = ConfigDict(from_attributes=True)


class UserPreferenceCreate(UserPreferenceBase):
    pass


class UserPreferenceUpdate(UserPreferenceBase):
    pass


#
#  User Schema
#



class UserBasicBase(BaseModel):
    first_name: str | None = None
    last_name: str | None = None
    user_name: str | None = None


class UserBase(BaseModel):
    email: Optional[EmailStr] = None
    is_active: bool| None = True
    is_superuser: bool = False
    first_name: str | None = None
    last_name: str | None = None
    password: str | None = None
    user_name: str | None = None
    avatar: str | None = None
    bio: str | None = None
    default_route: str | None = None
    groups: Optional[list[Group]] = []
    user_name: str | None = None
    password: str | None = None
    passwordc: str | None = None
    login_retry: int | None = 0
    is_blocked: bool| None = False
    user_type: str | None = None


class UserCreate(UserBase):
    user_name: str
    password: str
    passwordc: str
    login_retry: int = 0
    is_blocked: bool = False


class UserUpdate(UserBase):
    auth_uid: str| None = None
    preference_uid: str| None = None


class UserInDBBase(UserBase):
    uid: str| None = None

    model_config = ConfigDict(from_attributes=True)

class UserBasic(UserBasicBase):
    uid: str| None = None

    model_config = ConfigDict(from_attributes=True)

class User(UserInDBBase):
    pass


class UserInDB(UserInDBBase):
    hashed_password: str



class AuthenticatedUser(BaseModel):
    user: User
    token: str
    type: str
