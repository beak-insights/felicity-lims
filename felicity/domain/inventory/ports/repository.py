from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class IStockItemRepository(IBaseRepository, ABC):
    ...


class IStockCategoryRepository(IBaseRepository, ABC):
    ...


class IHazardRepository(IBaseRepository, ABC):
    ...


class IStockUnitRepository(IBaseRepository, ABC):
    ...


class IStockPackagingRepository(IBaseRepository, ABC):
    ...


class IStockProductRepository(IBaseRepository, ABC):
    ...


class IStockOrderProductRepository(IBaseRepository, ABC):
    ...


class IStockTransactionRepository(IBaseRepository, ABC):
    ...


class IStockAdjustmentRepository(IBaseRepository, ABC):
    ...


class IStockOrderRepository(IBaseRepository, ABC):
    ...
