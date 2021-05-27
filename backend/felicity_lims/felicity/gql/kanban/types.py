from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene import relay

from felicity.apps.kanban.models import (
    Board,
    BoardListing,
    ListingTask,
    TaskMilestone,
    TaskComment,
    TaskTag
)


# Graphene DocumentTag Type
class BoardType(SQLAlchemyObjectType):
    class Meta:
        model = Board
        interfaces = (relay.Node, )


# Graphene DocumentCategory Type
class BoardListingType(SQLAlchemyObjectType):
    class Meta:
        model = BoardListing
        interfaces = (relay.Node, )


# Graphene Document Type
class ListingTaskType(SQLAlchemyObjectType):
    class Meta:
        model = ListingTask
        interfaces = (relay.Node, )


# Graphene Document Type
class TaskMilestoneType(SQLAlchemyObjectType):
    class Meta:
        model = TaskMilestone
        interfaces = (relay.Node, )


# Graphene Document Type
class TaskCommentType(SQLAlchemyObjectType):
    class Meta:
        model = TaskComment
        interfaces = (relay.Node, )


# Graphene Document Type
class TaskTagType(SQLAlchemyObjectType):
    class Meta:
        model = TaskTag
        interfaces = (relay.Node, )