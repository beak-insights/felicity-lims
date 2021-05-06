import graphene
from graphene import (
    relay,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

from  felicity.gql import FilterableConnectionField
from felicity.gql.audit.types import AuditLogType


class FilterableAuditField(FilterableConnectionField):
    pass


class AuditLogQuery(graphene.ObjectType):
    node = relay.Node.Field()

    audit_logs_All = SQLAlchemyConnectionField(AuditLogType.connection)

    audit_logs_filter = FilterableAuditField(
        AuditLogType.connection,
        target_type=graphene.String(default_value=""),
        target_id=graphene.String(default_value="")
    )