import logging

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder

from felicity.apps.kanban import schemas, models
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
        if not title:
            raise GraphQLError("Please Provide a Board title")

        exists = models.Board.get(title=title)
        if exists:
            raise GraphQLError(f"Board {title} already exists")
        
        incoming = {
            "title": title,
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
        obj_in = schemas.BoardUpdate(**board.to_dict())
        board = board.update(obj_in)
        ok = True
        return UpdateBoard(ok=ok, board=board)


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
        if not title:
            raise GraphQLError("Please Provide a Listing title")

        board_uid = kwargs.get('board_uid')
        exists = models.BoardListing.get(title=title, board_uid=board_uid)
        if exists:
            raise GraphQLError(f"Listing {title} already exists in this board")

        incoming = {
            "title": title,
            "board_uid": board_uid,
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
        obj_in = schemas.BoardListingUpdate(**listing.to_dict())
        listing = listing.update(obj_in)
        ok = True
        return UpdateBoardListing(ok=ok, listing=listing)


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
        if not title:
            raise GraphQLError("Please Provide a Task title")

        incoming = {
            "title": title,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.ListingTaskCreate(**incoming)
        task = models.ListingTask.create(obj_in)
        ok = True
        return CreateListingTask(task=task, ok=ok)


class KanBanMutations(graphene.ObjectType):
    create_board = CreateBoard.Field()
    update_board = UpdateBoard.Field()
    create_board_listing = CreateBoardListing.Field()
    update_board_listing = UpdateBoardListing.Field()
    create_listing_task = CreateListingTask.Field()
