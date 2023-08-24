from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.patient.schemas import (
    Identification,
    PatientIdentification,
    Patient
)


class IIdentificationService(IBaseService[Identification], ABC):
    ...


class IPatientIdentificationService(IBaseService[PatientIdentification], ABC):
    ...


class IPatientService(IBaseService[Patient], ABC):
    ...