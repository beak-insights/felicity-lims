from abc import ABC, abstractmethod

from domain.setup.schemas import (
    LaboratorySetting,
    Supplier,
    Manufacturer,
    Department,
    Unit,
    Laboratory,
    District,
    Province,
    Country,
)
from domain.shared.ports.service import IBaseService


class ILaboratorySettingService(IBaseService[LaboratorySetting], ABC):
    ...


class ISupplierService(IBaseService[Supplier], ABC):
    ...


class IManufacturerService(IBaseService[Manufacturer], ABC):
    ...


class IDepartmentService(IBaseService[Department], ABC):
    ...


class IUnitService(IBaseService[Unit], ABC):
    ...


class ILaboratoryService(IBaseService[Laboratory], ABC):
    @abstractmethod
    async def get_by_setup_name(cls, keyword: str | None) -> Laboratory | None:
        ...


class IDistrictService(IBaseService[District], ABC):
    ...


class IProvinceService(IBaseService[Province], ABC):
    ...


class ICountryService(IBaseService[Country], ABC):
    ...
