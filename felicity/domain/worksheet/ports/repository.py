from abc import ABC

from domain.shared.ports.repository import IBaseRepository
from domain.worksheet.schemas import WorkSheet, WSTemplate


class IWorkSheetTemplateRepository(IBaseRepository[WSTemplate], ABC):
    ...
    
    
class IWorkSheetRepository(IBaseRepository[WorkSheet], ABC):
    ...
