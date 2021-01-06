import graphene
from graphene import (
    relay,
    String,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

from felicity.gql.client.types import ClientType
from felicity.apps.client import models


class ClientQuery(graphene.ObjectType):
    node = relay.Node.Field()
    # Client Queries
    client_all = SQLAlchemyConnectionField(ClientType.connection)
    client_by_code = graphene.Field(lambda: ClientType, code=graphene.String(default_value=""))
    client_by_uid = graphene.Field(lambda: ClientType, uid=graphene.String(default_value=""))

    def resolve_client_by_uid(self, info, uid):
        client= models.Client.get(uid=uid)
        return client

    def resolve_client_by_code(self, info, code):
        client = models.Client.get(code=code)
        return client
