from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository
from domain.worksheet.schemas import WorkSheet, WSTemplate
from domain.shared.ports.paginator.cursor import PageCursor


class IWorkSheetTemplateRepository(IBaseRepository[WSTemplate], ABC):
    ...


class IWorkSheetRepository(IBaseRepository[WorkSheet], ABC):
    ...
