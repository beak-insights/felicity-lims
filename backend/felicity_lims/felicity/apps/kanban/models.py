from sqlalchemy import Column, String, DateTime, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from felicity.database.base_class import DBModel
from felicity.apps.setup.models.setup import Department
from felicity.apps.user.models import User
from . import schemas


class Board(DBModel):
    title = Column(String)
    description = Column(String)
    archived = Column(Boolean(), default=False)
    department_uid = Column(Integer, ForeignKey('department.uid'), nullable=True)
    department = relationship(Department, backref="boards")
    create_by_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    create_by = relationship(User, backref="boards")

    @classmethod
    def create(cls, obj_in: schemas.BoardCreate) -> schemas.Board:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.BoardUpdate) -> schemas.Board:
        data = self._import(obj_in)
        return super().update(**data)


class BoardListing(DBModel):
    title = Column(String)
    description = Column(String)
    board_uid = Column(Integer, ForeignKey('board.uid'), nullable=False)
    board = relationship(Board, backref="board_listings")

    @classmethod
    def create(cls, obj_in: schemas.BoardListingCreate) -> schemas.BoardListing:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.BoardListingUpdate) -> schemas.BoardListing:
        data = self._import(obj_in)
        return super().update(**data)


class TaskTag(DBModel):
    name = Column(String)

    @classmethod
    def create(cls, obj_in: schemas.TaskTagCreate) -> schemas.TaskTag:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.TaskTagUpdate) -> schemas.TaskTag:
        data = self._import(obj_in)
        return super().update(**data)


class TaskTagged(DBModel):
    task_uid = Column(Integer, ForeignKey('listingtask.uid'), primary_key=True)
    tag_uid = Column(Integer, ForeignKey('tasktag.uid'), primary_key=True)


class TaskMember(DBModel):
    task_uid = Column(Integer, ForeignKey('listingtask.uid'), primary_key=True)
    user_uid = Column(Integer, ForeignKey('user.uid'), primary_key=True)


class ListingTask(DBModel):
    title = Column(String)
    description = Column(String)
    listing_uid = Column(Integer, ForeignKey('boardlisting.uid'), nullable=False)
    listing = relationship(BoardListing, backref="listing_tasks")
    assignee_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    assignee = relationship(User, backref="listing_tasks")
    tags = relationship(TaskTag, secondary="tasktagged", backref="tagged_tasks")
    members = relationship(User, secondary="taskmember", backref="member_tasks")
    status = Column(String)
    due_date = Column(DateTime, nullable=True)
    archived = Column(Boolean(), default=False)

    @classmethod
    def create(cls, obj_in: schemas.ListingTaskCreate) -> schemas.ListingTask:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.ListingTaskUpdate) -> schemas.ListingTask:
        data = self._import(obj_in)
        return super().update(**data)


class TaskMilestone(DBModel):
    title = Column(String)
    done = Column(Boolean(), default=False)
    task_uid = Column(Integer, ForeignKey('listingtask.uid'), primary_key=True)
    task = relationship(ListingTask, backref="task_milestones")
    assignee_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    assignee = relationship(User, backref="tasks_milestones")

    @classmethod
    def create(cls, obj_in: schemas.TaskMilestoneCreate) -> schemas.TaskMilestone:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.TaskMilestoneUpdate) -> schemas.TaskMilestone:
        data = self._import(obj_in)
        return super().update(**data)


class TaskComment(DBModel):
    comment = Column(String)
    task_uid = Column(Integer, ForeignKey('listingtask.uid'), primary_key=True)
    task = relationship(ListingTask, backref="task_comments")
    commenter_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    commenter = relationship(User, backref="task_comments")

    @classmethod
    def create(cls, obj_in: schemas.TaskCommentCreate) -> schemas.TaskComment:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.TaskCommentUpdate) -> schemas.TaskComment:
        data = self._import(obj_in)
        return super().update(**data)
