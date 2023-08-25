from abc import ABC

from domain.shared.ports.repository import IBaseRepository


class IStoreRoomRepository(IBaseRepository, ABC):
    ...


class IStorageLocationRepository(IBaseRepository, ABC):
    ...


class IStorageSectionRepository(IBaseRepository, ABC):
    ...


class IStorageContainerRepository(IBaseRepository, ABC):
    ...
