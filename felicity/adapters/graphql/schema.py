import strawberry  # noqa

# from adapters.graphql.user.mutations import UserMutations
from adapters.graphql.user.query import UserQuery

# from adapters.graphql.user import user_types
# from adapters.graphql.types import generic_types

# types = generic_types + user_types


@strawberry.type
class Query(
    UserQuery,
):
    pass


# @strawberry.type
# class Mutation(
#     UserMutations,
# ):
#     pass


@strawberry.type
class Mutation:
    pass


schema = strawberry.Schema(query=Query)
