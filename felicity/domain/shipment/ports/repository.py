from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository

    
class ReferralLaboratoryRepository(IBaseRepository, ABC):
    ...
    
    
class ShippedSampleRepository(IBaseRepository, ABC):
    ...
    
    
class ShipmentRepository(IBaseRepository, ABC):
    ...