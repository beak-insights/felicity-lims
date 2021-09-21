from typing import List, Optional
import strawberry

from felicity.apps.kanban import models
from felicity.gql.kanban.types import (
    BoardType,
    BoardListingType,
    ListingTaskType,
    TaskMilestoneType,
    TaskCommentType,
)


@strawberry.type
class KanBanQuery:
    @strawberry.field
    async def board_all(self, info) -> List[BoardType]:
        return await models.Board.all()

    @strawberry.field
    async def board_listing_all(self, info) -> List[BoardListingType]:
        return await models.BoardListing.all()

    @strawberry.field
    async def listing_task_all(self, info) -> List[ListingTaskType]:
        return await models.ListingTask.all()

    @strawberry.field
    async def task_milestone_all(self, info) -> List[TaskMilestoneType]:
        return await models.TaskMilestone.all()

    @strawberry.field
    async def task_comment_all(self, info, task_uid: int) -> List[TaskCommentType]:
        return await models.TaskComment.where(task_uid=task_uid)

    @strawberry.field
    async def board_by_uid(self, info, uid: int) -> Optional[BoardType]:
        return await models.Board.get(uid=uid)

    @strawberry.field
    async def board_listing_by_uid(self, info, uid: int) -> BoardListingType:
        return await models.BoardListing.get(uid=uid)

    @strawberry.field
    async def board_listing_by_board_uid(self, info, board_uid: int) -> List[BoardListingType]:
        return await models.BoardListing.where(board_uid=board_uid)

    @strawberry.field
    async def listing_task_by_uid(self, info, uid: int) -> ListingTaskType:
        return await models.ListingTask.get(uid=uid)


