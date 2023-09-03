from datetime import datetime
from typing import List, Optional

from pydantic import ConfigDict

from domain.setup.schemas import Department
from domain.shared.schemas import BaseAuditModel
from domain.user.schemas import Group, User


#
# Notice Schemas
#
class NoticeBase(BaseAuditModel):
    departments: Optional[List[Department]] = []
    groups: Optional[List[Group]] = []
    title: str | None = ""
    body: str | None = ""
    viewers: Optional[List[User]] = []
    expiry: datetime | None = None


class Notice(NoticeBase):
    uid: str | None = None

    model_config = ConfigDict(from_attributes=True)


class NoticeCreate(NoticeBase):
    pass


class NoticeUpdate(NoticeBase):
    pass
