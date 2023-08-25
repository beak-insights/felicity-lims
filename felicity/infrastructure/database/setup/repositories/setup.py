from domain.setup.ports.repository.setup import (
    IDepartmentRespository,
    ILaboratoryRespository,
    ILaboratorySettingRespository,
    IManufacturerRespository,
    ISupplierRespository,
    IUnitRespository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.setup.entities import (
    Department,
    Laboratory,
    LaboratorySetting,
    Manufacturer,
    Supplier,
    Unit,
)


class DepartmentRespository(BaseRepository[Department], IDepartmentRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Department
        super().__init__(db)


class LaboratoryRespository(BaseRepository[Laboratory], ILaboratoryRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Laboratory
        super().__init__(db)


class LaboratorySettingRespository(
    BaseRepository[LaboratorySetting], ILaboratorySettingRepository
):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = LaboratorySetting
        super().__init__(db)


class ManufacturerRespository(BaseRepository[Manufacturer], IManufacturerRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Manufacturer
        super().__init__(db)


class SupplierRespository(BaseRepository[Supplier], ISupplierRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Supplier
        super().__init__(db)


class UnitRespository(BaseRepository[Unit], IUnitRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Unit
        super().__init__(db)
