from typing import TypedDict


class StoreSampleIn(TypedDict):
    sample_uid: str
    storage_slot: str
    storage_slot_index: int
    storage_container_uid: str
