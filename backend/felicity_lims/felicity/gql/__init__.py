import logging
from graphql import GraphQLError
from graphene import relay
import graphene
import graphene_sqlalchemy
from abc import abstractmethod

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

#
# All my mutations subclass AuthorizedMutation and just implement their
# business logic in mutate_authorized. It is called only if user was authorized.

# https://itnext.io/python-graphql-tips-tricks-and-performance-improvements-beede1f4adb6

class AuthorizedMutation(relay.ClientIDMutation):
    class Meta:
        abstract = True

    @classmethod
    @abstractmethod
    def mutate_authorized(cls, root, info, **kwargs):
        pass

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        # authorize user using info.context.headers.get('Authorization')
        return cls.mutate_authorized(root, info, **kwargs)


def anonymous_return(value):
    def anonymous_return_decorator(func):
        def anonymous_return_wrapper(obj, info, **kwargs):
            has_authenticated = is_authenticated(info.context.get('request')) or same_origin(info.context.get('request'))
            if has_authenticated:
                logger.info(f"has_authenticated")
                return func(obj, info, **kwargs)

            logger.info(f"not authenticated")
            if callable(value):
                return value()
            return value
        return anonymous_return_wrapper
    return anonymous_return_decorator


class AuthenticationRequired(graphene.ObjectType):
    message = graphene.String(
        required=True,
    )

    @staticmethod
    def default_message():
        raise GraphQLError(f"Authentication Required")

        # return AuthenticationRequired(
        #     message="You must be logged in to perform this action"
        # )


def is_authenticated(request):
    # logger.info(request)

    # logger.info(f"{dir(request)}")
    # logger.info(f"{request.headers}")
    # logger.info(f"{request.user}")
    # logger.info(f"{dir(request.user)}")

    return request.user.is_authenticated


def same_origin(request):
    # logger.info(f"same origin: {request.headers.get('sec-fetch-site', 'unknown')}")
    return request.headers.get('sec-fetch-site', 'unknown') == "same-origin"


class FilterableConnectionField(graphene_sqlalchemy.SQLAlchemyConnectionField):
    RELAY_ARGS = ['first', 'last', 'before', 'after', 'sort']

    @classmethod
    def get_query(cls, model, info, **args):
        query = super(FilterableConnectionField, cls).get_query(model, info, **args)
        for field, value in args.items():
            if field not in cls.RELAY_ARGS:
                query = query.filter(getattr(model, field) == value)
        return query
