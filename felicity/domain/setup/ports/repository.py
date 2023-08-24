from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class LaboratorySettingRepository(IBaseRepository, ABC):
    ...

class SupplierRepository(IBaseRepository, ABC):
    ...

class ManufacturerRepository(IBaseRepository, ABC):
    ...

class DepartmentRepository(IBaseRepository, ABC):
    ...

class UnitRepository(IBaseRepository, ABC):
    ...

class LaboratoryRepository(IBaseRepository, ABC):
    ...

class DistrictRepository(IBaseRepository, ABC):
    ...

class ProvinceRepository(IBaseRepository, ABC):
    ...

class CountryRepository(IBaseRepository, ABC):
    ...