from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository
from domain.worksheet.schemas import WorkSheet, WSTemplate
from domain.shared.ports.paginator.cursor import PageCursor


class IWorkSheetTemplateRepository(IBaseRepository[WSTemplate], ABC):
    ...


class IWorkSheetRepository(IBaseRepository[WorkSheet], ABC):
    @abstractmethod
    async def paginate_with_cursors(
        self,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        status: str | None = None,
        sort_by: list[str] | None = None,
    ) -> PageCursor:
        pass
