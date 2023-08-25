from domain.setup.ports.repository.location import (
    ICountryRepository,
    IProvinceRepository,
    IDistrictRepository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.setup.entities import Country, Province, District


class CountryRespository(BaseRepository[Country], ICountryRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Country
        super().__init__(db)


class ProvinceRespository(BaseRepository[Province], IProvinceRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Province
        super().__init__(db)


class DistrictRespository(BaseRepository[District], IDistrictRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = District
        super().__init__(db)
