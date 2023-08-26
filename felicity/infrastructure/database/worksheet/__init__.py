from datetime import datetime
from sqlalchemy import Column, DateTime, ForeignKey, String
from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy.orm import relationship

from infrastructure.database.audit.mixin import AuditableMixin
from infrastructure.database.utils.hooks import EventHookMixin
from infrastructure.database import DBModel
from infrastructure.database.utils.sqlalchemy_mptt import BaseNestedSets


class BaseMPTT(BaseNestedSets):
    abstract = True

    @classmethod
    def get_pk_name(cls):
        """override get_pk_name to use uid instead of id"""
        return getattr(cls, "sqlalchemy_mptt_pk_name", "uid")


class TrailMixin(object):
    @declared_attr
    def created_at(self):
        return Column(DateTime, default=datetime.utcnow)

    @declared_attr
    def created_by_uid(self):
        return Column(String, ForeignKey("user.uid"), nullable=True)

    @declared_attr
    def created_by(self):
        return relationship("User", foreign_keys=[self.created_by_uid], lazy="selectin")

    @declared_attr
    def updated_at(self):
        return Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    @declared_attr
    def updated_by_uid(self):
        return Column(String, ForeignKey("user.uid"), nullable=True)

    @declared_attr
    def updated_by(self):
        return relationship("User", foreign_keys=[self.updated_by_uid], lazy="selectin")


class BaseAuditDBModel(DBModel, TrailMixin):
    """With creator and updater"""

    __abstract__ = True


class Auditable(BaseAuditDBModel, AuditableMixin):
    """With Audit Log"""

    __abstract__ = True


# class EventHooked(BaseAuditDBModel, EventHookMixin):
#     """Listens for All events:  Not working"""
#     __abstract__ = True
