from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class IActivityFeedRepository(IBaseRepository, ABC):
    ...


class IActivityStreamRepository(IBaseRepository, ABC):
    ...


class INotificationRepository(IBaseRepository, ABC):
    ...
