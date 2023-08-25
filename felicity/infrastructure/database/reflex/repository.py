from domain.reflex.ports.repository import (
    IReflexRuleRespository,
    IReflexBrainAdditionRespository,
    IReflexBrainFinalRespository,
    IReflexBrainCriteriaRespository,
    IReflexBrainRespository,
    IReflexActionRespository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.reflex.entities import (
    ReflexRule,
    ReflexBrainAddition,
    ReflexBrainFinal,
    ReflexBrainCriteria,
    ReflexBrain,
    ReflexAction,
)


class ReflexRuleRespository(BaseRepository[ReflexRule], IReflexRuleRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ReflexRule
        super().__init__(db)


class ReflexBrainAdditionRespository(
    BaseRepository[ReflexBrainAddition], IReflexBrainAdditionRepository
):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ReflexBrainAddition
        super().__init__(db)


class ReflexBrainFinalRespository(
    BaseRepository[ReflexBrainFinal], IReflexBrainFinalRepository
):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ReflexBrainFinal
        super().__init__(db)


class ReflexBrainCriteriaRespository(
    BaseRepository[ReflexBrainCriteria], IReflexBrainCriteriaRepository
):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ReflexBrainCriteria
        super().__init__(db)


class ReflexBrainRespository(BaseRepository[ReflexBrain], IReflexBrainRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ReflexBrain
        super().__init__(db)


class ReflexActionRespository(BaseRepository[ReflexAction], IReflexActionRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ReflexAction
        super().__init__(db)
