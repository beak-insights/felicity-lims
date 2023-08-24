from domain.analysis.ports.repository.results import (
    IQCSetRepository,
    IResultMutationRepository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.analysis.entities.results import (
    QCSet,
    ResultMutation,
)


class QCSetRespository(BaseRepository[QCSet], IQCSetRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = QCSet
        super().__init__(db)


class ResultMutationRespository(BaseRepository[ResultMutation], IResultMutationRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ResultMutation
        super().__init__(db)
