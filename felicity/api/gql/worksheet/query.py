import logging
from typing import List

import sqlalchemy as sa
import strawberry  # noqa
from strawberry.permission import PermissionExtension

from felicity.api.gql.permissions import IsAuthenticated, HasPermission
from felicity.api.gql.types import PageInfo
from felicity.api.gql.worksheet.types import (
    WorkSheetCursorPage,
    WorkSheetEdge,
    WorkSheetTemplateType,
    WorkSheetType,
)
from felicity.apps.guard import FAction, FObject
from felicity.apps.worksheet.services import WorkSheetService, WorkSheetTemplateService
from felicity.utils import has_value_or_is_truthy

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@strawberry.type
class WorkSheetQuery:
    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.WORKSHEET)]
        )]
    )
    async def worksheet_all(
            self,
            info,
            page_size: int | None = None,
            after_cursor: str | None = None,
            before_cursor: str | None = None,
            text: str | None = None,
            status: str | None = None,
            sort_by: list[str] | None = None,
    ) -> WorkSheetCursorPage:
        filters = []

        _or_text_ = {}
        if has_value_or_is_truthy(text):
            arg_list = [
                "state",
                "worksheet_id",
                "analyst___first_name",
                "analyst___last_name",
                "analyst___auth___user_name",
            ]
            for _arg in arg_list:
                _or_text_[_arg] = f"%{text}%"

            text_filters = {sa.or_: _or_text_}
            filters.append(text_filters)

        if status:
            filters.append({"state__exact": status})

        page = await WorkSheetService().paging_filter(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[WorkSheetEdge[WorkSheetType]] = page.edges
        items: List[WorkSheetType] = page.items
        page_info: PageInfo = page.page_info

        return WorkSheetCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.WORKSHEET)]
        )]
    )
    async def worksheet_by_analyst(self, info, analyst_uid: str) -> List[WorkSheetType]:
        return await WorkSheetService().get_all(analyst_uid=analyst_uid)

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.WORKSHEET)]
        )]
    )
    async def worksheet_by_uid(self, info, worksheet_uid: str) -> WorkSheetType:
        return await WorkSheetService().get(uid=worksheet_uid)

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.WORKSHEET)]
        )]
    )
    async def worksheet_by_id(self, info, worksheet_id: str) -> WorkSheetType:
        return await WorkSheetService().get(worksheet_id=worksheet_id)

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.WORKSHEET)]
        )]
    )
    async def worksheet_by_status(
            self, info, worksheet_status: str
    ) -> List[WorkSheetType]:
        return await WorkSheetService().get_all(status__exact=worksheet_status)

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.WORKSHEET)]
        )]
    )
    async def worksheet_template_all(self, info) -> List[WorkSheetTemplateType]:
        return await WorkSheetTemplateService().all()

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.WORKSHEET)]
        )]
    )
    async def worksheet_template_by_uid(
            self, info, worksheet_uid: str
    ) -> List[WorkSheetType]:
        return await WorkSheetService().get_all(uid=worksheet_uid)
