from typing import Optional, List
from datetime import datetime

from pydantic import BaseModel
from felicity.apps.setup.schemas import Department
from felicity.apps.user.schemas import User


#
# Board Schemas
#
class BoardBase(BaseModel):
    title: Optional[str] = ""
    description: Optional[str] = ""
    archived: Optional[bool] = False
    department_uid: Optional[str] = None
    department: Optional[Department] = None
    create_by_uid: Optional[str] = ""
    create_by: Optional[User] = ""


class Board(BoardBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


class BoardCreate(BoardBase):
    pass


class BoardUpdate(BoardBase):
    pass


#
# BoardListing Schemas
#
class BoardListingBase(BaseModel):
    title: Optional[str] = ""
    description: Optional[str] = ""
    board_uid: Optional[str] = ""
    board: Optional[Board] = ""


class BoardListing(BoardListingBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


class BoardListingCreate(BoardListingBase):
    pass


class BoardListingUpdate(BoardListingBase):
    pass


#
# TaskTag Schemas
#
class TaskTagBase(BaseModel):
    name: Optional[str] = ""


class TaskTag(TaskTagBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


class TaskTagCreate(TaskTagBase):
    pass


class TaskTagUpdate(TaskTagBase):
    pass


#
# Listing Task Schemas
#
class ListingTaskBase(BaseModel):
    title: Optional[str] = ""
    description: Optional[str] = ""
    listing_uid: Optional[str] = ""
    listing: Optional[BoardListing] = None
    assignee_uid: Optional[str] = ""
    assignee: Optional[User] = None
    tags: Optional[List[TaskTag]] = []
    members: Optional[List[User]] = []
    status: Optional[str] = ""
    due_date: Optional[datetime] = ""
    archived: Optional[bool] = False


class ListingTask(ListingTaskBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


class ListingTaskCreate(ListingTaskBase):
    pass


class ListingTaskUpdate(ListingTaskBase):
    pass


#
# TaskMilestone Schemas
#
class TaskMilestoneBase(BaseModel):
    title: Optional[str] = ""
    done: Optional[bool] = False
    task_uid: Optional[str] = ""
    task: Optional[ListingTask] = ""
    assignee_uid: Optional[str] = ""
    assignee: Optional[User] = None


class TaskMilestone(TaskMilestoneBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


class TaskMilestoneCreate(TaskMilestoneBase):
    pass


class TaskMilestoneUpdate(TaskMilestoneBase):
    pass


#
# TaskComment Schemas
#
class TaskCommentBase(BaseModel):
    name: Optional[str] = ""
    comment: Optional[str] = None
    task_uid: Optional[str] = None
    task: Optional[ListingTask] = None
    commenter_uid: Optional[str] = None
    commenter: Optional[User] = None


class TaskComment(TaskCommentBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True


class TaskCommentCreate(TaskCommentBase):
    pass


class TaskCommentUpdate(TaskCommentBase):
    pass