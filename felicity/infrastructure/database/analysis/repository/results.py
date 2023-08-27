from domain.analysis.ports.repository.results import (
    IQCSetRepository,
    IResultMutationRepository,
)

from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.analysis.entities.results import (
    QCSet,
    ResultMutation,
)


class QCSetRepository(BaseRepository[QCSet], IQCSetRepository):
    def __init__(self) -> None:
        self.model = QCSet
        super().__init__()


class ResultMutationRepository(
    BaseRepository[ResultMutation], IResultMutationRepository
):
    def __init__(self) -> None:
        self.model = ResultMutation
        super().__init__()
