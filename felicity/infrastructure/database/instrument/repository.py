from domain.instrument.ports.repository import (
    IMethodRepository,
    IInstrumentRepository,
    IInstrumentTypeRepository,
    IInstrumentCalibrationRepository,
    ICalibrationCertificateRepository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.instrument.entities import (
    Method,
    Instrument,
    InstrumentType,
    InstrumentCalibration,
    CalibrationCertificate,
)


SEQUENCE_BEGIN = 5
SEQUENCE_CUTOFF = 10


class MethodRespository(BaseRepository[Method], IMethodRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Method
        super().__init__(db)


class InstrumentRespository(BaseRepository[Instrument], IInstrumentRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Instrument
        super().__init__(db)


class InstrumentTypeRespository(
    BaseRepository[InstrumentType], IInstrumentTypeRepository
):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = InstrumentType
        super().__init__(db)


class InstrumentCalibrationRespository(
    BaseRepository[InstrumentCalibration], IInstrumentCalibrationRepository
):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = InstrumentCalibration
        super().__init__(db)


class CalibrationCertificateRespository(
    BaseRepository[CalibrationCertificate], ICalibrationCertificateRepository
):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = CalibrationCertificate
        super().__init__(db)
