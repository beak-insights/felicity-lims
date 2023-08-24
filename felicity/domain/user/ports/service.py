from abc import ABC, abstractmethod

from domain.user.schemas import (
    User, 
    Group, 
    Permission,
    AuthenticatedUser,
    GroupPermission,
    UserPreference
)
from domain.shared.schemas import Message
from domain.shared.ports.service import IBaseService

        
class IUserService(IBaseService[User], ABC):
    @abstractmethod
    async def create(
        self,
        first_name: str,
        last_name: str,
        email: str,
        group_uid: str | None = None,
    ) -> User:
        pass
    
    @abstractmethod
    async def authenticate(
        self, info, username: str, password: str
    ) -> AuthenticatedUser: ...
    
    @abstractmethod
    async def recover_password(
        self, info, username: str
    ) -> Message: ...
    
    @abstractmethod
    async def has_access(self, password: str): ...
        
    

class IGroupService(IBaseService[Group], ABC):
    @abstractmethod
    async def update_group_permissions(
        self,
        group_uid: str, 
        permission_uid: str
    ) -> GroupPermission:
        pass
    
    def add_member(self, member): ...
    
    @abstractmethod
    def remove_member(self, member): ...
    
    @abstractmethod
    def add_perm(self, perm): ...
    
    @abstractmethod
    def remove_perm(self, perm): ...
    

class IPermissionService(IBaseService[Permission], ABC):
    ...

class IUserPreferenceService(IBaseService[UserPreference], ABC):
    ...