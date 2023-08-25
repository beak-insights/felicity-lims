from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.instrument.schemas import (
    CalibrationCertificate,
    # InstrumentCompetence,
    Method,
    InstrumentType,
    Instrument,
    InstrumentCalibration,
)


class ICalibrationCertificateService(IBaseService[CalibrationCertificate], ABC):
    ...


# class IInstrumentCompetenceService(IBaseService[InstrumentCompetence], ABC): ...


class IMethodService(IBaseService[Method], ABC):
    ...


class IInstrumentTypeService(IBaseService[InstrumentType], ABC):
    ...


class IInstrumentService(IBaseService[Instrument], ABC):
    ...


class IInstrumentCalibrationService(IBaseService[InstrumentCalibration], ABC):
    ...
