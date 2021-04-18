import logging

import graphene
from graphene import (
    relay,
    String,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

from felicity.gql.user.types import UserType, PermissionType, GroupType
from felicity.apps.user import models as user_models
from felicity.gql import deps

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class UserQuery(graphene.ObjectType):
    node = relay.Node.Field()
    # User Queries
    user_all = SQLAlchemyConnectionField(UserType.connection)
    user_me = graphene.Field(lambda: UserType, token=graphene.String(default_value=""))
    user_by_email = graphene.Field(lambda: UserType, email=graphene.String(default_value=""))
    # Groups Queries
    group_all = SQLAlchemyConnectionField(GroupType.connection)
    group_by_uid = graphene.Field(lambda: GroupType, uid=graphene.String(default_value=""))
    # Permission Queries
    permission_all = SQLAlchemyConnectionField(PermissionType.connection)
    permission_by_uid = graphene.Field(lambda: PermissionType, uid=graphene.String(default_value=""))
    
    @staticmethod
    def resolve_user_me(self, info, token):
        """ Get current active user"""
        current_active_user = deps.get_current_active_user(token=token)
        return current_active_user

    @staticmethod
    def resolve_user_by_email(self, info, email):
        return user_models.User.get_by_email(email=email)
