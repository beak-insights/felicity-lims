"""Analysis Configs
This file is part of Felicity LIMS Software
"""


class States:
    class Sample:
        PENDING = 'pending'
        RECEIVED = 'received'
        TO_BE_VERIFIED = 'to_be_verified'  # un-authorised
        VERIFIED = 'verified'  # authorised
        PUBLISHED = 'published'
        INVALIDATED = 'invalidated'
        CANCELLED = 'cancelled'
        REJECTED = 'rejected'

    class Result:
        PENDING = 'pending'
        RESULTED = 'resulted'
        RETRACTED = 'retracted'

    def __init__(self):
        self.sample = self.Sample()
        self.result = self.Result()


states = States()


class Priorities(object):
    class Sample:
        NORMAL = 0
        HIGH = 1

    def __init__(self):
        self.sample = self.Sample()


priorities = Priorities()
