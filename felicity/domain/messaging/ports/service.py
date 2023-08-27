from abc import ABC, abstractmethod

from domain.messaging.schemas import MessageThread, Message
from domain.shared.ports.service import IBaseService
from domain.user.schemas import User


class IMessageThreadService(IBaseService[MessageThread], ABC):
    @abstractmethod
    async def get_last_message(self, thread: MessageThread):
        ...

    @staticmethod
    @abstractmethod
    async def can_reply(thread: MessageThread) -> bool:
        ...

    @abstractmethod
    async def add_recipient(self, thread: MessageThread, user: User) -> MessageThread:
        ...

    @abstractmethod
    async def add_deletion(self, thread: MessageThread, user: User) -> MessageThread:
        ...

    @abstractmethod
    async def delete_for_user(self, thread: MessageThread, user: User) -> str:
        ...

    @staticmethod
    @abstractmethod
    async def all_have_deleted(thread: MessageThread) -> bool:
        ...

    @abstractmethod
    async def delete_thread(self, uid: str, user: User) -> str:
        ...


class IMessageService(IBaseService[Message], ABC):
    @abstractmethod
    async def send_message(
            self, recipients: list[str], body: str, user: User
    ) -> Message:
        ...

    @abstractmethod
    async def reply_message(self, thread_uid: str, body: str, user: User) -> Message:
        ...

    @abstractmethod
    async def view_message(self, uid: str, user: User) -> Message:
        ...

    @abstractmethod
    async def delete_message(self, uid: str, user: User) -> str:
        ...

    @abstractmethod
    async def add_deletion(self, message: Message, user: User) -> Message:
        ...

    @abstractmethod
    async def delete_for_user(self, message: Message, user: User) -> str:
        ...

    @staticmethod
    async def all_have_deleted(message: Message) -> bool:
        ...

    @staticmethod
    async def was_read(message: Message) -> bool:
        ...
