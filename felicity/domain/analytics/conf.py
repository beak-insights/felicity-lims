"""Job Configs
This file is part of Felicity LIMS Software
"""
from enum import StrEnum


class ReportTypes(StrEnum):
    LINE_LISTING = "LINE_LISTING"


class ReportStates(StrEnum):
    PENDING = "PENDING"
    FAILED = "FAILED"
    READY = "READY"
