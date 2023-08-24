from domain.storage.ports.repository import (
    IStoreRoomRepository,
    IStorageLocationRepository,
    IStorageSectionRepository,
    IStorageContainerRepository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.storage.entities import (
    StoreRoom,
    StorageLocation,
    StorageSection,
    StorageContainer,
)


class StoreRoomRespository(BaseRepository[StoreRoom], IStoreRoomRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StoreRoom
        super().__init__(db)


class StorageLocationRespository(BaseRepository[StorageLocation], IStorageLocationRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StorageLocation
        super().__init__(db)


class StorageSectionRespository(BaseRepository[StorageSection], IStorageSectionRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StorageSection
        super().__init__(db)


class StorageContainerRespository(BaseRepository[StorageContainer], IStorageContainerRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StorageContainer
        super().__init__(db)
