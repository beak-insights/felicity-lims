from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository
from domain.user.schemas import User, Group, Permission


class IUserRepository(IBaseRepository[User], ABC):
    ...


class IGroupRepository(IBaseRepository[Group], ABC):
    ...


class IPermissionRepository(IBaseRepository[Permission], ABC):
    ...

