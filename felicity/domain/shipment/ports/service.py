from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.shipment.schemas import (
    ReferralLaboratory,
    ShippedSample,
    Shipment,
)
    

class IReferralLaboratoryService(IBaseService[ReferralLaboratory], ABC):
    ...
    

class IShippedSampleService(IBaseService[ShippedSample], ABC):
    ...
    

class IShipmentService(IBaseService[Shipment], ABC):
    @abstractmethod
    async def set_flow(self, flow: bool = False): ...

    @abstractmethod
    async def get_samples(self): ...

    @abstractmethod
    async def change_state(self, state, updated_by_uid): ...

    @abstractmethod
    async def finalise(self, finaliser): ...

    @abstractmethod
    async def dispatch(self, dispatcher): ...
