from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.messaging.schemas import (
    MessageThread,
    Message
)
from domain.user.schemas import User


class IMessageThreadService(IBaseService[MessageThread], ABC):
    @abstractmethod
    async def get_last_message(self): ...
    
    @abstractmethod
    async def can_reply(self) -> bool: ...
    
    @abstractmethod
    async def add_recipient(self, user: User) -> MessageThread: ...
    
    @abstractmethod
    async def add_deletion(self, user: User) -> MessageThread: ...
    
    @abstractmethod
    async def delete_for_user(self, user: User) -> MessageThread: ...
    

class IMessageService(IBaseService[Message], ABC):
    @abstractmethod
    async def add_deletion(self, user: User) -> Message: ...

    @abstractmethod
    async def delete_for_user(self, user: User) -> int: ...

    @abstractmethod
    async def all_have_deleted(self) -> bool: ...
