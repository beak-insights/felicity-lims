from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene import relay

from felicity.apps.worksheet.models import WorkSheet

# Graphene WorkSheet Type
class WorkSheetType(SQLAlchemyObjectType):
    class Meta:
        model = WorkSheet
        interfaces = (relay.Node, )
