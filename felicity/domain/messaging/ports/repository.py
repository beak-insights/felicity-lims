from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class IMessageThreadRepository(IBaseRepository, ABC):
    ...


class IMessageRepository(IBaseRepository, ABC):
    ...
