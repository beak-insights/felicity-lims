from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.storage.schemas import (
    StoreRoom,
    StorageLocation,
    StorageSection,
    StorageContainer,
)
from domain.analysis.schemas import Sample


class IStoreRoomService(IBaseService[StoreRoom], ABC):
    ...

class IStorageLocationService(IBaseService[StorageLocation], ABC):
    ...

class IStorageSectionService(IBaseService[StorageSection], ABC):
    ...

class IStorageContainerService(IBaseService[StorageContainer], ABC):
    @abstractmethod
    async def get_samples(self) -> list[Sample]: ...

    @abstractmethod
    async def reset_stored_count(self) -> None: ...
