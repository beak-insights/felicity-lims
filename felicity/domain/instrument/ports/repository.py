from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class ICalibrationCertificateRepository(IBaseRepository, ABC):
    ...


class IMethodRepository(IBaseRepository, ABC):
    ...


class IInstrumentTypeRepository(IBaseRepository, ABC):
    ...


class IInstrumentRepository(IBaseRepository, ABC):
    ...


class IInstrumentCalibrationRepository(IBaseRepository, ABC):
    ...


# class IInstrumentCompetenceRepository(IBaseRepository, ABC): ...
