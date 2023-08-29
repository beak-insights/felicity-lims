from typing import TypedDict


class ReferenceSampleIn(TypedDict):
    sample_uid: str | None
    shipped_sample_uid: str | None
    analyses: list[str]  # list of analysis uids being assigned/unassigned
