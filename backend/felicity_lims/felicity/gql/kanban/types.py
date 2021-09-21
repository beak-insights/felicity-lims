from typing import Optional, List
from datetime import datetime

import strawberry

from felicity.gql.setup.types import DepartmentType
from felicity.gql.user.types import UserType


@strawberry.type
class BoardType:
    uid: int
    title: str
    description: Optional[str]
    archived: bool
    department_uid: Optional[int]
    department: Optional[DepartmentType]
    created_by_uid: Optional[int]
    created_by: Optional[UserType]
    updated_by_uid: Optional[int]
    updated_by: Optional[UserType]


@strawberry.type
class BoardListingType:
    uid: int
    title: int
    description: Optional[str]
    board_uid: Optional[int]
    board: Optional[BoardType]
    created_by_uid: Optional[int]
    created_by: Optional[UserType]
    updated_by_uid: Optional[int]
    updated_by: Optional[UserType]


@strawberry.type
class TaskTagType:
    uid: int
    name: str


@strawberry.type
class ListingTaskType:
    uid: int
    title: str
    description: Optional[str]
    listing_uid: Optional[int]
    listing: Optional[BoardListingType]
    assignee_uid: Optional[int]
    assignee: Optional[UserType]
    tags: Optional[List[TaskTagType]]
    members: Optional[List[UserType]]
    due_date: Optional[datetime]
    complete: bool
    archived: bool
    created_by_uid: Optional[int]
    created_by: Optional[UserType]
    updated_by_uid: Optional[int]
    updated_by: Optional[UserType]


@strawberry.type
class TaskMilestoneType:
    title: str
    done: bool
    task_uid: int
    task: Optional[ListingTaskType]
    assignee_uid: Optional[int]
    assignee: Optional[UserType]
    created_by_uid: Optional[int]
    created_by: Optional[UserType]
    updated_by_uid: Optional[int]
    updated_by: Optional[UserType]


@strawberry.type
class TaskCommentType:
    uid: int
    comment: str
    task_uid: int
    task: Optional[ListingTaskType]
    created_by_uid: Optional[int]
    created_by: Optional[UserType]
    updated_by_uid: Optional[int]
    updated_by: Optional[UserType]


