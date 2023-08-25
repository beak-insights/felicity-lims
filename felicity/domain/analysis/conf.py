"""Analysis Configs
This file is part of Felicity LIMS Software
"""
from enum import StrEnum, IntEnum


class SampleStates(StrEnum):
    SCHEDULED = "scheduled"  # scheduled for collection
    EXPECTED = "expected"  # not yet received in the laboratory
    RECEIVED = "received"  # received in the laboratory and ready for processing
    AWAITING = "awaiting"  # pending approval
    APPROVED = "approved"  # authorised for release
    PUBLISHING = "publishing"  # printed samples, ready for dispatch
    PUBLISHED = "published"  # printed samples, ready for dispatch
    INVALIDATED = "invalidated"  # approval condemnation
    CANCELLED = "cancelled"  # no longer required <in other words deleted>
    REJECTED = "rejected"  # declined for non conformance reasons
    STORED = "stored"  # samples in storage
    REFERRED = "referred"  # sample with all analyses refered
    PAIRED = "paired"  # samples with some (not all) analysis referred


class ResultStates(StrEnum):
    PENDING = "pending"  # analytes that are pending results
    SUBMITTING = "submitting"
    RESULTED = "resulted"  # analytes that have results but not approved yet. 'to_be_verified' / 'un-authorised'
    RETRACTED = "retracted"  # analytes with erroneous results for correction
    CANCELLED = (
        "cancelled"  # analytes that are no longer required <in other words deleted>
    )
    APPROVING = "approving"
    APPROVED = "approved"  # analytes that are authorised/approved
    REFERRED = "referred"  # analytes that are refered


class SamplePriorities(IntEnum):
    NORMAL = 0
    MEDIUM = 1
    HIGH = 2
