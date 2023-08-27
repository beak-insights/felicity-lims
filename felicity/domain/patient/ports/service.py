from abc import ABC, abstractmethod

from domain.patient.schemas import Identification, PatientIdentification, Patient
from domain.shared.ports.service import IBaseService


class IIdentificationService(IBaseService[Identification], ABC):
    ...


class IPatientIdentificationService(IBaseService[PatientIdentification], ABC):
    @abstractmethod
    async def create(self, patient: Patient, identifications: list[str]):
        ...


class IPatientService(IBaseService[Patient], ABC):
    ...
