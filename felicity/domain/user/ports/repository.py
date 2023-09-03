from abc import ABC

from domain.shared.ports.repository import IBaseRepository
from domain.user.schemas import User, Group, Permission


class IUserRepository(IBaseRepository[User], ABC):
    pass


class IGroupRepository(IBaseRepository[Group], ABC):
    pass


class IPermissionRepository(IBaseRepository[Permission], ABC):
    pass
