from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository
from domain.user.schemas import (
    User, 
    Group, 
    Permission,
    UserPreference
)
from domain.shared.ports.paginator.cursor import PageCursor


class IUserRepository(IBaseRepository[User], ABC):
    @abstractmethod
    async def paginate_with_cursors(
        self,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> PageCursor:
        pass


class IGroupRepository(IBaseRepository[Group], ABC):
    ...

class IPermissionRepository(IBaseRepository[Permission], ABC):
    ...
    
class IUserPreferenceRepository(IBaseRepository[UserPreference], ABC):
    ...