from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene import relay

from felicity.apps.audit.models import AuditLog


# Graphene AuditLog Type
class AuditLogType(SQLAlchemyObjectType):
    class Meta:
        model = AuditLog
        interfaces = (relay.Node, )

