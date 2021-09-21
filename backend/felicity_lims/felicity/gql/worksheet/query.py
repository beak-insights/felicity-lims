import logging
from typing import List
import strawberry

from felicity.gql.worksheet.types import WorkSheetType, WorkSheetTemplateType
from felicity.apps.worksheet import models as ws_models

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@strawberry.type
class WorkSheetQuery:
    @strawberry.field
    async def worksheet_all(self, info) -> List[WorkSheetType]:
        return await ws_models.WorkSheet.all()

    @strawberry.field
    async def worksheet_template_all(self, info) -> List[WorkSheetTemplateType]:
        return  await ws_models.WorkSheetTemplate.all()

    @strawberry.field
    async def worksheet_by_analyst(self, info, analyst_uid: int) -> List[WorkSheetType]:
        return await ws_models.WorkSheet.where(analyst_uid=analyst_uid)

    @strawberry.field
    async def worksheet_by_uid(self, info, worksheet_uid: int) -> WorkSheetType:
        return await ws_models.WorkSheet.where(worksheet_uid=worksheet_uid)

    @strawberry.field
    async def worksheet_by_id(self, info, worksheet_id: int) -> WorkSheetType:
        return await ws_models.WorkSheet.where(worksheet_id=worksheet_id)

    @strawberry.field
    async def worksheet_by_status(self, info, worksheet_status: str) -> List[WorkSheetType]:
        return await ws_models.WorkSheet.where(status__exact=worksheet_status)

    @strawberry.field
    async def worksheet_template_by_uid(self, info, worksheet_uid: int) -> List[WorkSheetType]:
        return await ws_models.WorkSheet.where(uid=worksheet_uid)




