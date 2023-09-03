from typing import TypedDict


class ARSampleIn(TypedDict):
    sample_type: str
    profiles: list[str]
    analyses: list[str]


class SampleRejectIn(TypedDict):
    uid: str
    reasons: list[str]
    other: str | None


class SamplePublishIn(TypedDict):
    uid: str
    action: str


class QCSetIn(TypedDict):
    qcTemplateUid: str | None
    qcLevels: list[str]
    analysisProfiles: list[str]
    analysisServices: list[str]


class ARResultIn(TypedDict):
    uid: str
    result: str
    reportable: bool | None
