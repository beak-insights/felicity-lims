from domain.instrument.ports.repository import (
    IMethodRepository,
    IInstrumentRepository,
    IInstrumentTypeRepository,
    IInstrumentCalibrationRepository,
    ICalibrationCertificateRepository,
)

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


class MethodRepository(BaseRepository[Method], IMethodRepository):
    def __init__(self) -> None:
        self.model = Method
        super().__init__()


class InstrumentRepository(BaseRepository[Instrument], IInstrumentRepository):
    def __init__(self) -> None:
        self.model = Instrument
        super().__init__()


class InstrumentTypeRepository(
    BaseRepository[InstrumentType], IInstrumentTypeRepository
):
    def __init__(self) -> None:
        self.model = InstrumentType
        super().__init__()


class InstrumentCalibrationRepository(
    BaseRepository[InstrumentCalibration], IInstrumentCalibrationRepository
):
    def __init__(self) -> None:
        self.model = InstrumentCalibration
        super().__init__()


class CalibrationCertificateRepository(
    BaseRepository[CalibrationCertificate], ICalibrationCertificateRepository
):
    def __init__(self) -> None:
        self.model = CalibrationCertificate
        super().__init__()
