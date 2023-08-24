from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class MessageThreadRepository(IBaseRepository, ABC):
    ...

class MessageRepository(IBaseRepository, ABC):
    ...