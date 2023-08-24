from datetime import datetime

from sqlalchemy import Boolean, Column, DateTime, Integer, String
from sqlalchemy.ext.declarative import declared_attr

from infrastructure.database import BaseAuditDBModel


class SimpleAuditMixin(object):
    """
    Can't use BaseAuditMixin since
    user table does not exist yest
    """

    @declared_attr
    def created_at(self):
        return Column(DateTime, default=datetime.utcnow)

    @declared_attr
    def creator_name(self):
        return Column(String, nullable=True)

    @declared_attr
    def creator_uid(self):
        return Column(String, nullable=True)

    @declared_attr
    def updated_at(self):
        return Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    @declared_attr
    def updator_name(self):
        return Column(String, nullable=True)

    @declared_attr
    def updator_uid(self):
        return Column(String, nullable=True)


class AbstractBaseUser(BaseAuditDBModel): # (SimpleAuditMixin, DBModel)
    __abstract__ = True
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    mobile_phone = Column(String, nullable=True)
    business_phone = Column(String, nullable=True)
    is_active = Column(Boolean(), default=True)
    is_superuser = Column(Boolean(), default=False)
    # auth
    user_name = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    login_retry = Column(Integer)
    is_blocked = Column(Boolean(), default=False)