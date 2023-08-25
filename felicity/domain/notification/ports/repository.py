from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class ActivityFeedRepository(IBaseRepository, ABC):
    ...


class ActivityStreamRepository(IBaseRepository, ABC):
    ...


class NotificationRepository(IBaseRepository, ABC):
    ...
