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
    IStockAdjustmentRepository
)
from domain.shared.ports.persistance import PersistenceProtocol
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
    StockAdjustment
)


class StockItemRespository(BaseRepository[StockItem], IStockItemRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StockItem
        super().__init__(db)


class StockCategoryRespository(BaseRepository[StockCategory], IStockCategoryRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StockCategory
        super().__init__(db)


class HazardRespository(BaseRepository[Hazard], IHazardRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Hazard
        super().__init__(db)


class StockUnitRespository(BaseRepository[StockUnit], IStockUnitRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StockUnit
        super().__init__(db)


class StockPackagingRespository(BaseRepository[StockPackaging], IStockPackagingRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StockPackaging
        super().__init__(db)


class StockProductRespository(BaseRepository[StockProduct], IStockProductRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StockProduct
        super().__init__(db)


class StockOrderRespository(BaseRepository[StockOrder], IStockOrderRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StockOrder
        super().__init__(db)


class StockOrderProductRespository(BaseRepository[StockOrderProduct], IStockOrderProductRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StockOrderProduct
        super().__init__(db)


class StockTransactionRespository(BaseRepository[StockTransaction], IStockTransactionRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StockTransaction
        super().__init__(db)


class StockAdjustmentRespository(BaseRepository[StockAdjustment], IStockAdjustmentRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = StockAdjustment
        super().__init__(db)
