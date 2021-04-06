from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene import relay

from felicity.apps.worksheet.models import WorkSheet, WorkSheetTemplate

# Graphene WorkSheet Type
class WorkSheetType(SQLAlchemyObjectType):
    class Meta:
        model = WorkSheet
        interfaces = (relay.Node, )


# Graphene WorkSheetTemplate Type
class WorkSheetTemplateType(SQLAlchemyObjectType):
    class Meta:
        model = WorkSheetTemplate
        interfaces = (relay.Node, )