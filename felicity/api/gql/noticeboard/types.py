from typing import List, Optional

import strawberry  # noqa

from felicity.api.gql.setup.types.department import DepartmentType
from felicity.api.gql.user.types import GroupType, UserType


@strawberry.type
class NoticeType:
    uid: str
    departments: Optional[List[DepartmentType]]
    groups: Optional[List[GroupType]]
    title: str
    body: str
    viewers: list[UserType] | None
    expiry: str  # datetime
    created_at: str | None
    created_by_uid: str | None
    created_by: UserType | None
    updated_at: str | None
    updated_by_uid: str | None
    updated_by: UserType | None
