from dataclasses import field
from typing import List, Optional

from pydantic import ConfigDict

from felicity.apps.common.schemas import BaseAuditModel
from felicity.apps.user.schemas import User


#
# Message Schemas
#
class MessageBase(BaseAuditModel):
    thread_uid: str
    thread: Optional["MessageThread"] = None
    body: str | None = ""
    viewers: Optional[List[User]] = field(default_factory=list)
    deleted_by: Optional[List[User]] = field(default_factory=list)
    parent_id: str | None = None


class Message(MessageBase):
    uid: str | None = None

    model_config = ConfigDict(from_attributes=True)


class MessageCreate(MessageBase):
    pass


class MessageUpdate(MessageBase):
    pass


#
# MessageThread Schemas
#
class MessageThreadBase(BaseAuditModel):
    broadcast: bool | None = False
    recipients: Optional[List[User]] = field(default_factory=list)
    messages: Optional[List[Message]] = field(default_factory=list)
    recipients: Optional[List[User]] = field(default_factory=list)


class MessageThread(MessageThreadBase):
    uid: str | None = None

    model_config = ConfigDict(from_attributes=True)


class MessageThreadCreate(MessageThreadBase):
    pass


class MessageThreadUpdate(MessageThreadBase):
    pass
