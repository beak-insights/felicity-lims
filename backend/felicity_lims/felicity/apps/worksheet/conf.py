"""Worksheet Configs
This file is part of Felicity LIMS Software
"""


class WSTypes(object):
    """Worksheet Types

    FLAT: Single Column, can be displayed as Multi Column when needed 
    GRID: Multi Column: Specific Rows and Columns
    """
    FLAT = 0
    GRID = 1


worksheet_types = WSTypes()


class WSStates(object):
    """Worksheet States
    """
    PENDING_ASSIGNMENT = 'pending_assignment'
    OPEN = 'open'
    TO_BE_VERIFIED = 'to_be_verified'
    VERIFIED = 'verified'


worksheet_states = WSStates()
