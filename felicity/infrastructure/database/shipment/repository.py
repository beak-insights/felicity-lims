from domain.shipment.ports.repository import (
    IReferralLaboratoryRepository,
    IShipmentRepository,
    IShippedSampleRepository,
)

from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.shipment.entities import (
    ReferralLaboratory,
    Shipment,
    ShippedSample,
)


class ReferralLaboratoryRepository(
    BaseRepository[ReferralLaboratory], IReferralLaboratoryRepository
):
    def __init__(self) -> None:
        self.model = ReferralLaboratory
        super().__init__()


class ShipmentRepository(BaseRepository[Shipment], IShipmentRepository):
    def __init__(self) -> None:
        self.model = Shipment
        super().__init__()


class ShippedSampleRepository(BaseRepository[ShippedSample], IShippedSampleRepository):
    def __init__(self) -> None:
        self.model = ShippedSample
        super().__init__()
