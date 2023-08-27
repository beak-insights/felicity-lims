from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class ILaboratorySettingRepository(IBaseRepository, ABC):
    ...


class ISupplierRepository(IBaseRepository, ABC):
    ...


class IManufacturerRepository(IBaseRepository, ABC):
    ...


class IDepartmentRepository(IBaseRepository, ABC):
    ...


class IUnitRepository(IBaseRepository, ABC):
    ...


class ILaboratoryRepository(IBaseRepository, ABC):
    ...


class IDistrictRepository(IBaseRepository, ABC):
    ...


class IProvinceRepository(IBaseRepository, ABC):
    ...


class ICountryRepository(IBaseRepository, ABC):
    ...
