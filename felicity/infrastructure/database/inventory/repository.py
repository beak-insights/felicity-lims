from domain.inventory.ports.repository import (
    IStockItemRepository,
    IStockCategoryRepository,
    IHazardRepository,
    IStockUnitRepository,
    IStockPackagingRepository,
    IStockProductRepository,
    IStockOrderRepository,
    IStockOrderProductRepository,
    IStockTransactionRepository,
    IStockAdjustmentRepository,
)

from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.inventory.entities import (
    StockItem,
    StockCategory,
    Hazard,
    StockUnit,
    StockPackaging,
    StockProduct,
    StockOrder,
    StockOrderProduct,
    StockTransaction,
    StockAdjustment,
)


class StockItemRepository(BaseRepository[StockItem], IStockItemRepository):
    def __init__(self) -> None:
        self.model = StockItem
        super().__init__()


class StockCategoryRepository(BaseRepository[StockCategory], IStockCategoryRepository):
    def __init__(self) -> None:
        self.model = StockCategory
        super().__init__()


class HazardRepository(BaseRepository[Hazard], IHazardRepository):
    def __init__(self) -> None:
        self.model = Hazard
        super().__init__()


class StockUnitRepository(BaseRepository[StockUnit], IStockUnitRepository):
    def __init__(self) -> None:
        self.model = StockUnit
        super().__init__()


class StockPackagingRepository(
    BaseRepository[StockPackaging], IStockPackagingRepository
):
    def __init__(self) -> None:
        self.model = StockPackaging
        super().__init__()


class StockProductRepository(BaseRepository[StockProduct], IStockProductRepository):
    def __init__(self) -> None:
        self.model = StockProduct
        super().__init__()


class StockOrderRepository(BaseRepository[StockOrder], IStockOrderRepository):
    def __init__(self) -> None:
        self.model = StockOrder
        super().__init__()


class StockOrderProductRepository(
    BaseRepository[StockOrderProduct], IStockOrderProductRepository
):
    def __init__(self) -> None:
        self.model = StockOrderProduct
        super().__init__()


class StockTransactionRepository(
    BaseRepository[StockTransaction], IStockTransactionRepository
):
    def __init__(self) -> None:
        self.model = StockTransaction
        super().__init__()


class StockAdjustmentRepository(
    BaseRepository[StockAdjustment], IStockAdjustmentRepository
):
    def __init__(self) -> None:
        self.model = StockAdjustment
        super().__init__()
