from typing import TypedDict


class ReflexCriteriaIn(TypedDict):
    analysis_uid: str
    operator: str
    value: str


class ReflexFinalIn(TypedDict):
    analysis_uid: str
    value: str


class ReflexAddNewIn(TypedDict):
    analysis_uid: str
    count: int
