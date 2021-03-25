from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene import relay

from felicity.apps.client.models import Client, ClientContact


# Graphene Client Type
class ClientType(SQLAlchemyObjectType):
    class Meta:
        model = Client
        interfaces = (relay.Node, )

class ClientContactType(SQLAlchemyObjectType):
    class Meta:
        model = ClientContact
        interfaces = (relay.Node, )
