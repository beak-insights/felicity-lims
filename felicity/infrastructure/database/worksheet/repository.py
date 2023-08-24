from domain.worksheet.ports.repository import IWorkSheetRepository, IWorkSheetTemplateRepository
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository
from infrastructure.database.worksheet.entities import WorkSheet, WorkSheetTemplate


class WorkSheetRepository(BaseRepository[WorkSheet], IWorkSheetRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = WorkSheet
        super().__init__(db)


class WorkSheetTemplateRepository(BaseRepository[WorkSheetTemplate], IWorkSheetTemplateRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = WorkSheetTemplate
        super().__init__(db)
