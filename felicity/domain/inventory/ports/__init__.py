from typing import TypedDict


class StockOrderProductLineIn(TypedDict):
    product_uid: str
    quantity: int
    remarks: str | None
