import graphene
from graphene import (
    relay,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

from felicity.apps.client import models
from felicity.gql.client.types import ClientType, ClientContactType


class ClientQuery(graphene.ObjectType):
    node = relay.Node.Field()
    # Client Queries
    client_all = SQLAlchemyConnectionField(ClientType.connection)
    client_by_code = graphene.Field(lambda: ClientType, code=graphene.String(default_value=""))
    client_by_uid = graphene.Field(lambda: ClientType, uid=graphene.String(default_value=""))
    clients_by_name = graphene.List(lambda: ClientType, name=graphene.String(default_value=""))
    client_search = graphene.List(lambda: ClientType, query_string=graphene.String(default_value=""))

    # Client Contact
    client_contact_all = SQLAlchemyConnectionField(ClientContactType.connection)
    client_contact_by_client_uid = graphene.List(lambda: ClientContactType, client_uid=graphene.String(default_value=""))

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
        return query

    def resolve_client_search(self, info, query_string):
        filters = ['name__ilike', 'code__ilike']
        combined = set()
        for _filter in filters:
            arg = dict()
            arg[_filter] = f"%{query_string}%"
            query = models.Client.where(**arg).all()
            for item in query:
                combined.add(item)
        return list(combined)

    def resolve_client_contact_by_client_uid(self, info, client_uid):
        client_contact = models.ClientContact.where(client_uid=client_uid).all()
        return client_contact
