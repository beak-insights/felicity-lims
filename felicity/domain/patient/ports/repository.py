from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository



class IdentificationRepository(IBaseRepository, ABC):
    ...


class PatientIdentificationRepository(IBaseRepository, ABC):
    ...
    

class PatientRepository(IBaseRepository, ABC):
    ...