from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.noticeboard.schemas import Notice
from domain.user.schemas import User, Group
from domain.setup.schemas import Department


class INoticeService(IBaseService[Notice], ABC):
    @abstractmethod
    async def reset_views(self) -> Notice: ...

    @abstractmethod
    async def remove_viewer(self, user: User) -> Notice: ...

    @abstractmethod
    async def add_viewer(self, user: User) -> Notice: ...

    @abstractmethod
    async def reset_departments(self) -> Notice: ...

    @abstractmethod
    async def remove_department(self, department: Department) -> Notice: ...

    @abstractmethod
    async def add_department(self, department: Department) -> Notice: ...

    @abstractmethod
    async def reset_groups(self) -> Notice: ...

    @abstractmethod
    async def remove_group(self, group: Group) -> Notice: ...

    @abstractmethod
    async def add_group(self, group: Group) -> Notice: ...