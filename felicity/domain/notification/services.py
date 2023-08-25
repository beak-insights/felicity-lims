from typing import List, Optional, Any
from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AlreadyExistsError
from domain.notification.ports.service import (
    IActivityFeedService,
    IActivityStreamService,
    INotificationService,
)
from domain.notification.schemas import (
    ActivityFeed,
    ActivityStream,
    Notification,
)
from domain.user.schemas import User, Group
from domain.setup.schemas import Department


    
    async def notification_filter(
        self,
        info,
        group_uid: str | None,
        department_uid: str | None,
        user_uid: str | None,
    ) -> List[NotificationType]:
        filters = {}

        if group_uid:
            filters["groups__uid__in"] = [group_uid]

        if department_uid:
            filters["departments__uid__in"] = [department_uid]

        if user_uid:
            filters["users__uid__in"] = [user_uid]

        notif_stmt = models.Notification.smart_query(
            filters=filters, sort_attrs=["-created_at"]
        )

        notifications = (
            (await models.Notification.session.execute(notif_stmt)).scalars().all()
        )
        return list(notifications)
    
    

class ActivityFeedService(BaseService[ActivityFeed], IActivityFeedService):
    async def reset_subscribers(self) -> ActivityFeed:
        self.subscribers.clear()
        return await self.save()

    async def remove_subscriber(self, user: User) -> ActivityFeed:
        self.subscribers.remove(user)
        return await self.save()

    async def add_subscriber(self, user: User) -> ActivityFeed:
        if user not in self.viewers:
            self.subscribers.append(user)
            return await self.save()
        return self


class ActivityStreamService(BaseService[ActivityStream], IActivityStreamService):
    async def reset_feeds(self) -> ActivityStream:
        self.feeds.clear()
        return await self.save()

    async def remove_feed(self, feed: ActivityFeed) -> ActivityStream:
        self.feeds.remove(feed)
        return await self.save()

    async def add_feed(self, feed: ActivityFeed) -> ActivityStream:
        if feed not in self.feeds:
            self.feeds.append(feed)
            return await self.save()
        return self

    async def reset_viewers(self) -> ActivityStream:
        self.viewers.clear()
        return await self.save()

    async def remove_viewer(self, viewer: User) -> ActivityStream:
        self.viewers.remove(viewer)
        return await self.save()

    async def add_viewer(self, viewer: User) -> ActivityStream:
        if viewer not in self.viewers:
            self.viewers.append(viewer)
            return await self.save()
        return self

    async def not_viewed(self, activity_uid) -> Optional[List[User]]:
        """list of users who have not seen the notification"""

    @classmethod
    async def for_viewer(
        cls, viewer: User, seen=False
    ) -> Optional[List[ActivityStream]]:
        """Streams for user: seen or unseen"""

    @classmethod
    async def stream(
        cls,
        obj: Any,
        actor: User,
        verb: str,
        object_type: str,
        feeds: List[ActivityFeed] = None,
    ):
        if feeds is None:
            feeds = []
        s_in = ActivityStreamCreate(
            feeds=feeds,
            actor_uid=actor.uid,
            verb=verb,
            action_object_type=object_type,
            action_object_uid=obj.uid,
            target_uid=None,
        )
        await cls.create(s_in)


class NotificationService(BaseService[Notification], INotificationService):
    async def reset_views(self) -> Notification:
        self.viewers.clear()
        return await self.save()

    async def remove_viewer(self, user: User) -> Notification:
        self.viewers.remove(user)
        return await self.save()

    async def add_viewer(self, user: User) -> Notification:
        if user not in self.viewers:
            self.viewers.append(user)
            return await self.save()
        return self

    async def reset_departments(self) -> Notification:
        self.departments.clear()
        return await self.save()

    async def remove_department(self, department: Department) -> Notification:
        self.departments.remove(department)
        return await self.save()

    async def add_department(self, department: Department) -> Notification:
        if department not in self.departments:
            self.departments.append(department)
            return await self.save()
        return self

    async def reset_groups(self) -> Notification:
        self.groups.clear()
        return await self.save()

    async def remove_group(self, group: Group) -> Notification:
        self.groups.remove(group)
        return await self.save()

    async def add_group(self, group: Group) -> Notification:
        if group not in self.groups:
            self.groups.append(group)
            return await self.save()
        return self

    async def reset_users(self) -> Notification:
        self.users.clear()
        return await self.save()

    async def remove_users(self, user: User) -> Notification:
        self.users.remove(user)
        return await self.save()

    async def add_user(self, user: Group) -> Notification:
        if user not in self.users:
            self.users.append(user)
            return await self.save()
        return self
