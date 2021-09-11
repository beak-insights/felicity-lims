import logging

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder

from felicity.apps.kanban import schemas, models
from felicity.apps.user import models as user_models
from felicity.gql import auth_from_info, verify_user_auth
from felicity.gql.kanban import types

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# 
# Create Board Mutations
# 
class CreateBoard(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=False)
        archived = graphene.Boolean(required=False)
        department_uid = graphene.String(required=False)
        create_by_uid = graphene.String(required=False)

    ok = graphene.Boolean()
    board = graphene.Field(lambda: types.BoardType)

    @staticmethod
    def mutate(root, info, title, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create kanban boards")

        if not title:
            raise GraphQLError("Please Provide a Board title")

        exists = models.Board.get(title=title)
        if exists:
            raise GraphQLError(f"Board {title} already exists")
        
        incoming = {
            "title": title,
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.BoardCreate(**incoming)
        board = models.Board.create(obj_in)
        ok = True
        return CreateBoard(board=board, ok=ok)

                
class UpdateBoard(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        title = graphene.String(required=True)
        description = graphene.String(required=False)
        archived = graphene.Boolean(required=False)
        department_uid = graphene.String(required=False)
        create_by_uid = graphene.String(required=False)

    ok = graphene.Boolean()
    board = graphene.Field(lambda: types.BoardType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update kanban boards")

        if not uid:
            raise GraphQLError("No uid provided to identify update obj")
        
        board = models.Board.get(uid=uid)
        if not board:
            raise GraphQLError(f"Board with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(board)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(board, field, kwargs[field])
                except Exception as e:
                    logger.warning(f"failed to set attribute {field}: {e}")

        try:
            setattr(board, 'updated_by_uid', felicity_user.uid)
        except Exception as e:
            logger.warning(f"failed to set attribute {'updated_by_uid'}: {e}")

        obj_in = schemas.BoardUpdate(**board.to_dict())
        board = board.update(obj_in)
        ok = True
        return UpdateBoard(ok=ok, board=board)


class DeleteBoard(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)

    ok = graphene.Boolean()
    board_uid = graphene.Int()

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can delete kanban board")

        if not uid:
            raise GraphQLError("No uid provided to identify update obj")

        board = models.Board.get(uid=uid)
        if not board:
            raise GraphQLError(f"Board with uid {uid} not found. Cannot delete obj ...")

        for listing in board.board_listings:
            if listing.listing_tasks:
                raise GraphQLError(f"Cannot Delete a Board whose Listings have tasks ...")

        board_uid = board.uid
        board.delete()

        ok = True
        return DeleteBoard(ok=ok, board_uid=board_uid)


#
# Create BoardListing Mutations
#
class CreateBoardListing(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=False)
        board_uid = graphene.String(required=True)

    ok = graphene.Boolean()
    listing = graphene.Field(lambda: types.BoardListingType)

    @staticmethod
    def mutate(root, info, title, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create  kanban board listings")

        if not title:
            raise GraphQLError("Please Provide a Listing title")

        board_uid = kwargs.get('board_uid')
        exists = models.BoardListing.get(title=title, board_uid=board_uid)
        if exists:
            raise GraphQLError(f"Listing {title} already exists in this board")

        incoming = {
            "title": title,
            "board_uid": board_uid,
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.BoardListingCreate(**incoming)
        listing = models.BoardListing.create(obj_in)
        ok = True
        return CreateBoardListing(listing=listing, ok=ok)


class UpdateBoardListing(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        title = graphene.String(required=False)
        description = graphene.String(required=False)

    ok = graphene.Boolean()
    listing = graphene.Field(lambda: types.BoardListingType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update kanban board listings")

        if not uid:
            raise GraphQLError("No uid provided to identify update obj")

        listing = models.BoardListing.get(uid=uid)
        if not listing:
            raise GraphQLError(f"Listing with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(listing)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(listing, field, kwargs[field])
                except Exception as e:
                    logger.warning(f"failed to set attribute {field}: {e}")

        try:
            setattr(listing, 'updated_by_uid', felicity_user.uid)
        except Exception as e:
            logger.warning(f"failed to set attribute {'updated_by_uid'}: {e}")

        obj_in = schemas.BoardListingUpdate(**listing.to_dict())
        listing = listing.update(obj_in)
        ok = True
        return UpdateBoardListing(ok=ok, listing=listing)


class DeleteBoardListing(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)

    ok = graphene.Boolean()
    listing_uid = graphene.Int()

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can delete kanban board listings")

        if not uid:
            raise GraphQLError("No uid provided to identify update obj")

        listing = models.BoardListing.get(uid=uid)
        if not listing:
            raise GraphQLError(f"Board Listing with uid {uid} not found. Cannot delete obj ...")

        if listing.listing_tasks:
            raise GraphQLError(f"First Delete/Move tasks from this listings in order to delete ...")

        listing_uid = listing.uid
        listing.delete()

        ok = True
        return DeleteBoardListing(ok=ok, listing_uid=listing_uid)


#
# Create ListingTask Mutations
#
class CreateListingTask(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=False)
        listing_uid = graphene.String(required=True)

    ok = graphene.Boolean()
    task = graphene.Field(lambda: types.ListingTaskType)

    @staticmethod
    def mutate(root, info, title, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create kanban tasks")

        if not title:
            raise GraphQLError("Please Provide a Task title")

        incoming = {
            "title": title,
            "assignee_uid": felicity_user.uid,
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.ListingTaskCreate(**incoming)
        task = models.ListingTask.create(obj_in)
        task.members.append(felicity_user)
        task.save()

        ok = True
        return CreateListingTask(task=task, ok=ok)


class UpdateListingTask(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        title = graphene.String(required=False)
        description = graphene.String(required=False)
        listing_uid = graphene.String(required=False)
        due_date = graphene.String(required=False)
        assignee_uid = graphene.String(required=False)
        member_uids = graphene.List(graphene.String)
        tags = graphene.List(graphene.String)
        complete = graphene.Boolean(required=False)
        archived = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    task = graphene.Field(lambda: types.ListingTaskType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update kanban tasks")

        if not uid:
            raise GraphQLError("No uid provided to identify update obj")

        task = models.ListingTask.get(uid=uid)
        if not task:
            raise GraphQLError(f"Listing Task with uid {uid} not found. Cannot update obj ...")

        # obj_data = jsonable_encoder(task)
        obj_data = task.to_dict()
        for field in obj_data:
            if field in kwargs:
                if kwargs[field] or kwargs[field] is False:
                    try:
                        setattr(task, field, kwargs[field])
                    except Exception as e:
                        logger.warning(f"failed to set attribute {field}: {e}")

        try:
            setattr(task, 'updated_by_uid', felicity_user.uid)
        except Exception as e:
            logger.warning(f"failed to set attribute {'updated_by_uid'}: {e}")

        logger.warning(f"  kwargs: {kwargs}\n task.to_dict(): {task.to_dict()} ")
        obj_in = schemas.ListingTaskUpdate(**task.to_dict())
        task = task.update(obj_in)

        member_uids = kwargs.get('member_uids', None)
        if member_uids:
            task.members = []
            if len(member_uids) > 0:
                for member_uid in member_uids:
                    member = user_models.User.get(uid=int(member_uid))
                    task.members.append(member)

        task.save()

        ok = True
        return UpdateListingTask(ok=ok, task=task)


class DeleteListingTask(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)

    ok = graphene.Boolean()
    task_uid = graphene.Int()

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can delete kanban tasks")

        if not uid:
            raise GraphQLError("No uid provided to identify update obj")

        task = models.ListingTask.get(uid=uid)
        if not task:
            raise GraphQLError(f"Listing Task with uid {uid} not found. Cannot update obj ...")

        for comment in task.task_comments:
            comment.delete()

        for milestone in task.task_milestones:
            milestone.delete()

        task_uid = task.uid
        task.delete()

        ok = True
        return DeleteListingTask(ok=ok, task_uid=task_uid)


class DuplicateListingTask(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        title = graphene.String(required=True)

    ok = graphene.Boolean()
    task = graphene.Field(lambda: types.ListingTaskType)

    @staticmethod
    def mutate(root, info, uid, title, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can delete kanban tasks")

        if not uid:
            raise GraphQLError("No uid provided to identify update obj")

        if not title:
            raise GraphQLError("Please provide the title for the duplicate task")

        task = models.ListingTask.get(uid=uid)
        if not task:
            raise GraphQLError(f"Listing Task with uid {uid} not found. Cannot update obj ...")

        task_data = task.to_dict()
        del task_data['uid']
        task_data['title'] = title

        obj_in = schemas.ListingTaskCreate(**task_data)
        duplicate = models.ListingTask.create(obj_in)
        duplicate.task_milestones = task.task_milestones
        duplicate.save()

        ok = True
        return DuplicateListingTask(ok=ok, task=duplicate)

#
# Create TaskComment Mutations
#
class CreateTaskComment(graphene.Mutation):
    class Arguments:
        task_uid = graphene.String(required=True)
        comment = graphene.String(required=True)

    ok = graphene.Boolean()
    task_comment = graphene.Field(lambda: types.TaskCommentType)

    @staticmethod
    def mutate(root, info, comment, task_uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create kanban tasks")

        if not task_uid:
            raise GraphQLError("Comment Missing the associated Listing Task")

        if not comment:
            raise GraphQLError("Task Comment cannot be blank")

        incoming = {
            "comment": comment,
            "task_uid": task_uid,
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.TaskCommentCreate(**incoming)
        task_comment = models.TaskComment.create(obj_in)
        ok = True
        return CreateTaskComment(task_comment=task_comment, ok=ok)


#
# Create TaskMilestone Mutations
#
class CreateTaskMilestone(graphene.Mutation):
    class Arguments:
        task_uid = graphene.String(required=True)
        title = graphene.String(required=True)
        done = graphene.Boolean(required=False)
        assignee_uid = graphene.String(required=False)

    ok = graphene.Boolean()
    task_milestone = graphene.Field(lambda: types.TaskMilestoneType)

    @staticmethod
    def mutate(root, info, title, task_uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create kanban tasks")

        if not task_uid:
            raise GraphQLError("Milestone Missing the associated Listing Task")

        if not title:
            raise GraphQLError("Task Comment title cannot be blank")

        incoming = {
            "task_uid": task_uid,
            "title": title,
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.TaskMilestoneCreate(**incoming)
        task_milestone = models.TaskMilestone.create(obj_in)
        ok = True
        return CreateTaskMilestone(task_milestone=task_milestone, ok=ok)


class KanBanMutations(graphene.ObjectType):
    create_board = CreateBoard.Field()
    update_board = UpdateBoard.Field()
    delete_board = DeleteBoard.Field()
    create_board_listing = CreateBoardListing.Field()
    update_board_listing = UpdateBoardListing.Field()
    delete_board_listing = DeleteBoardListing.Field()
    create_listing_task = CreateListingTask.Field()
    update_listing_task = UpdateListingTask.Field()
    delete_listing_task = DeleteListingTask.Field()
    duplicate_listing_task = DuplicateListingTask.Field()
    create_task_comment = CreateTaskComment.Field()
    create_task_milestone = CreateTaskMilestone.Field()
