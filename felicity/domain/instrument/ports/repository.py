from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class CalibrationCertificateRepository(IBaseRepository, ABC):
    ...


class MethodRepository(IBaseRepository, ABC):
    ...


class InstrumentTypeRepository(IBaseRepository, ABC):
    ...


class InstrumentRepository(IBaseRepository, ABC):
    ...


class InstrumentCalibrationRepository(IBaseRepository, ABC):
    ...


# class InstrumentCompetenceRepository(IBaseRepository, ABC): ...
