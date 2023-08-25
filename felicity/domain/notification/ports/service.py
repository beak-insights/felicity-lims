from abc import ABC, abstractmethod
from typing import List, Optional, Any
from domain.shared.ports.service import IBaseService
from domain.notification.schemas import (
    ActivityFeed,
    ActivityStream,
    Notification,
)
from domain.user.schemas import User, Group
from domain.setup.schemas import Department


class IActivityFeedService(IBaseService[ActivityFeed], ABC):
    @abstractmethod
    async def reset_subscribers(self) -> ActivityFeed:
        ...

    @abstractmethod
    async def remove_subscriber(self, user: User) -> ActivityFeed:
        ...

    @abstractmethod
    async def add_subscriber(self, user: User) -> ActivityFeed:
        ...


class IActivityStreamService(IBaseService[ActivityStream], ABC):
    @abstractmethod
    async def reset_feeds(self) -> ActivityStream:
        ...

    @abstractmethod
    async def remove_feed(self, feed: ActivityFeed) -> ActivityStream:
        ...

    @abstractmethod
    async def add_feed(self, feed: ActivityFeed) -> ActivityStream:
        ...

    @abstractmethod
    async def reset_viewers(self) -> ActivityStream:
        ...

    @abstractmethod
    async def remove_viewer(self, viewer: User) -> ActivityStream:
        ...

    @abstractmethod
    async def add_viewer(self, viewer: User) -> ActivityStream:
        ...

    @abstractmethod
    async def not_viewed(self, activity_uid) -> Optional[List[User]]:
        ...

    @abstractmethod
    async def for_viewer(
        cls, viewer: User, seen=False
    ) -> Optional[List[ActivityStream]]:
        ...

    @abstractmethod
    async def stream(
        cls,
        obj: Any,
        actor: User,
        verb: str,
        object_type: str,
        feeds: List[ActivityFeed] = None,
    ):
        ...


class INotificationService(IBaseService[Notification], ABC):
    @abstractmethod
    async def reset_views(self) -> Notification:
        ...

    @abstractmethod
    async def remove_viewer(self, user: User) -> Notification:
        ...

    @abstractmethod
    async def add_viewer(self, user: User) -> Notification:
        ...

    @abstractmethod
    async def reset_departments(self) -> Notification:
        ...

    @abstractmethod
    async def remove_department(self, department: Department) -> Notification:
        ...

    @abstractmethod
    async def add_department(self, department: Department) -> Notification:
        ...

    @abstractmethod
    async def reset_groups(self) -> Notification:
        ...

    @abstractmethod
    async def remove_group(self, group: Group) -> Notification:
        ...

    @abstractmethod
    async def add_group(self, group: Group) -> Notification:
        ...

    @abstractmethod
    async def reset_users(self) -> Notification:
        ...

    @abstractmethod
    async def remove_users(self, user: User) -> Notification:
        ...

    @abstractmethod
    async def add_user(self, user: Group) -> Notification:
        ...
