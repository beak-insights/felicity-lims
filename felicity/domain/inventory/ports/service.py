from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService

from domain.inventory.schemas import (
    StockItem,
    StockCategory,
    Hazard,
    StockUnit,
    StockPackaging,
    StockProduct,
    StockOrderProduct,
    StockTransaction,
    StockAdjustment,
    StockOrder,
)


class IStockItemService(IBaseService[StockItem], ABC):
    ...


class IStockCategoryService(IBaseService[StockCategory], ABC):
    ...


class IHazardService(IBaseService[Hazard], ABC):
    ...


class IStockUnitService(IBaseService[StockUnit], ABC):
    ...


class IStockPackagingService(IBaseService[StockPackaging], ABC):
    ...


class IStockProductService(IBaseService[StockProduct], ABC):
    ...


class IStockOrderProductService(IBaseService[StockOrderProduct], ABC):
    ...


class IStockTransactionService(IBaseService[StockTransaction], ABC):
    ...


class IStockAdjustmentService(IBaseService[StockAdjustment], ABC):
    ...


class IStockOrderService(IBaseService[StockOrder], ABC):
    ...
