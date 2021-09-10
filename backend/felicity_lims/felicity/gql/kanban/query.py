import graphene
from graphene import (
    relay,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField
from felicity.apps.kanban import models
from felicity.gql import FilterableConnectionField
from felicity.gql.kanban.types import (
    BoardType,
    BoardListingType,
    ListingTaskType,
    TaskMilestoneType,
    TaskCommentType,
)


class FilterableAuditField(FilterableConnectionField):
    pass


class KanBanQuery(graphene.ObjectType):
    node = relay.Node.Field()
    board_all = SQLAlchemyConnectionField(BoardType.connection)
    board_listing_all = SQLAlchemyConnectionField(BoardListingType.connection)
    listing_task_all = SQLAlchemyConnectionField(ListingTaskType.connection)
    task_milestone_all = SQLAlchemyConnectionField(TaskMilestoneType.connection)
    task_comment_all = SQLAlchemyConnectionField(TaskCommentType.connection)

    board_by_uid = graphene.Field(lambda: BoardType, uid=graphene.String(default_value=""))
    board_listing_by_board_uid = graphene.Field(lambda: BoardListingType, uid=graphene.String(default_value=""))
    listing_task_by_uid = graphene.Field(lambda: ListingTaskType, uid=graphene.String(default_value=""))

    def resolve_board_by_uid(self, info, uid):
        board = models.Board.get(uid=uid)
        return board

    def resolve_board_listing_by_board_uid(self, info, uid):
        document = models.BoardListing.get(uid=uid)
        return document

    @staticmethod
    def resolve_listing_task_by_uid(self, info, uid):
        task = models.ListingTask.get(uid=uid)
        return task

