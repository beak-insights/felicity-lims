from domain.patient.ports.repository import (
    IPatientRepository,
    IIdentificationRepository,
    IPatientIdentificationRepository
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.patient.entities import (
    Patient,
    Identification,
    PatientIdentification
)


class PatientRespository(BaseRepository[Patient], IPatientRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Patient
        super().__init__(db)


class IdentificationRespository(BaseRepository[Identification], IIdentificationRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Identification
        super().__init__(db)


class PatientIdentificationRespository(BaseRepository[PatientIdentification], IPatientIdentificationRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = PatientIdentification
        super().__init__(db)
