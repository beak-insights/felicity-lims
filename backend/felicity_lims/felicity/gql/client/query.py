import graphene
from graphene import (
    relay,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

from felicity.apps.client import models
from felicity.gql.client.types import ClientType


class ClientQuery(graphene.ObjectType):
    node = relay.Node.Field()
    # Client Queries
    client_all = SQLAlchemyConnectionField(ClientType.connection)
    client_by_code = graphene.Field(lambda: ClientType, code=graphene.String(default_value=""))
    client_by_uid = graphene.Field(lambda: ClientType, uid=graphene.String(default_value=""))
    clients_by_name = graphene.List(lambda: ClientType, name=graphene.String(default_value=""))

    def resolve_client_by_uid(self, info, uid):
        client = models.Client.get(uid=uid)
        return client

    def resolve_client_by_code(self, info, code):
        client = models.Client.get(code=code)
        return client

    def resolve_clients_by_name(self, info, name):
        clients = models.Client.where(name__contains=name).all()
        # clients = models.Client.where(name__like=f"%{name}%").all()
        return clients
