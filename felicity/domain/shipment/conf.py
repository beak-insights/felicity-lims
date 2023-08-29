"""Shipment Configs
This file is part of Felicity LIMS Software
"""
from enum import StrEnum


class ShipmentStates(StrEnum):
    """Shipment Workflow States
    empty -> preparation -> ready -> shipped
    Other:
    rejected, recalled, received
    """

    DUE = "due"  # shipment recived from external labs
    RECEIVING = "receiving"
    EMPTY = "empty"  # shipment without samples
    PREPARATION = "preparation"  # shipment containing at least a single sample
    READY = "ready"  # shipment finalised
    AWAITING = "awaiting"  # shipment queued for dispatch
    FAILED = "failed"  # shipment queued for dispatch, has at least a one dispatch trial
    SHIPPED = "shipped"  # shipment that was successfully send and acknowledged in the other system
    REJECTED = "rejected"  # shipment rejected by the receiving lab
    RECEIVED = "received"  # shipment received by the receiving lab
    CANCELLED = "cancelled"  #
