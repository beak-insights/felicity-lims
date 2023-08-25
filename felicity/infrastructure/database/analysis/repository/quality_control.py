from domain.analysis.ports.repository.quality_control import (
    IQCSetRepository,
    IQCReferenceRepository,
    IQCLevelRepository,
    IQCTemplateRepository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.analysis.entities.quality_control import (
    QCSet,
    QCReference,
    QCLevel,
    QCTemplate,
)


class QCSetRespository(BaseRepository[QCSet], IQCSetRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = QCSet
        super().__init__(db)


class QCReferenceRespository(BaseRepository[QCReference], IQCReferenceRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = QCReference
        super().__init__(db)


class QCLevelRespository(BaseRepository[QCLevel], IQCLevelRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = QCLevel
        super().__init__(db)


class QCTemplateRespository(BaseRepository[QCTemplate], IQCTemplateRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = QCTemplate
        super().__init__(db)
