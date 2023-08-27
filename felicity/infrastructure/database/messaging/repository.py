from domain.messaging.ports.repository import (
    IMessageThreadRepository,
    IMessageRepository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.messaging.entities import MessageThread, Message


class MessageThreadRespository(BaseRepository[MessageThread], IMessageThreadRepository):
    def __init__(self) -> None:
        self.model = MessageThread
        super().__init__()


class MessageRespository(BaseRepository[Message], IMessageRepository):
    def __init__(self) -> None:
        self.model = Message
        super().__init__()
