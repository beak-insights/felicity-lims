from domain.notification.ports.repository import (
    IActivityFeedRepository,
    IActivityStreamRepository,
    INotificationRepository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.notification.entities import (
    ActivityFeed,
    ActivityStream,
    Notification,
)


class ActivityFeedRespository(BaseRepository[ActivityFeed], IActivityFeedRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ActivityFeed
        super().__init__(db)


class ActivityStreamRespository(
    BaseRepository[ActivityStream], IActivityStreamRepository
):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ActivityStream
        super().__init__(db)


class NotificationRespository(BaseRepository[Notification], INotificationRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Notification
        super().__init__(db)
