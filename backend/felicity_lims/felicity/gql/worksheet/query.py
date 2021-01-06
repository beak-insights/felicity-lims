import logging

import graphene
from graphene import (
    relay,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

from felicity.gql.worksheet.types import WorkSheetType
from felicity.apps.worksheet import models as ws_models

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class WorkSheetQuery(graphene.ObjectType):
    node = relay.Node.Field()
    worksheet_all = SQLAlchemyConnectionField(WorkSheetType.connection)
    worksheet_by_analyst = graphene.Field(lambda: WorkSheetType, analyst_uid=graphene.String(default_value=""))
    worksheet_by_uid = graphene.Field(lambda: WorkSheetType, worksheet_uid=graphene.String(default_value=""))
    worksheet_by_id = graphene.Field(lambda: WorkSheetType, worksheet_id=graphene.String(default_value=""))
    worksheet_by_status = graphene.Field(lambda: WorkSheetType, worksheet_status=graphene.String(default_value=""))
    

    def resolve_worksheet_by_analyst(self, info, analyst_uid):
        ws = ws_models.WorkSheet.where(analyst_uid=analyst_uid)
        return ws

    def resolve_worksheet_by_id(self, info, worksheet_id):
        ws = ws_models.WorkSheet.get(worksheet_id=worksheet_id)
        return ws

    def resolve_worksheet_by_uid(self, info, worksheet_uid):
        ws = ws_models.WorkSheet.get(uid=worksheet_uid)
        return ws

    def resolve_worksheet_by_status(self, info, worksheet_status):
        ws = ws_models.WorkSheet.where(status__exact=worksheet_status)
        return ws