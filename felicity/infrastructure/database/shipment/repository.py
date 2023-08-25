from domain.shipment.ports.repository import (
    IReferralLaboratoryRepository,
    IShipmentRepository,
    IShippedSampleRepository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.shipment.entities import (
    ReferralLaboratory,
    Shipment,
    ShippedSample,
)


class ReferralLaboratoryRespository(
    BaseRepository[ReferralLaboratory], IReferralLaboratoryRepository
):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ReferralLaboratory
        super().__init__(db)


class ShipmentRespository(BaseRepository[Shipment], IShipmentRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Shipment
        super().__init__(db)


class ShippedSampleRespository(BaseRepository[ShippedSample], IShippedSampleRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ShippedSample
        super().__init__(db)
