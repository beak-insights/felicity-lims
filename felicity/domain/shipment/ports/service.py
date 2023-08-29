from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.shipment.schemas import (
    ReferralLaboratory,
    ShippedSample,
    Shipment,
)
from domain.user.schemas import User


class IReferralLaboratoryService(IBaseService[ReferralLaboratory], ABC):
    ...


class IShippedSampleService(IBaseService[ShippedSample], ABC):
    ...


class IShipmentService(IBaseService[Shipment], ABC):
    @abstractmethod
    async def set_flow(self, flow: bool = False):
        ...

    @abstractmethod
    async def get_samples(self):
        ...

    @abstractmethod
    async def change_state(self, shipment: Shipment, state: str, updated_by: User):
        ...

    @abstractmethod
    async def finalise(self, finaliser):
        ...

    @abstractmethod
    async def dispatch(self, dispatcher):
        ...
