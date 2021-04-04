from datetime import datetime
from typing import Optional
from pydantic import BaseModel

from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship

from felicity.database.base_class import DBModel
from felicity.apps.user.models import User
from felicity.apps.user.schemas import User as UserSchema


class TrailMixin(object):

    @declared_attr
    def created_by_uid(self):
        return Column(Integer, ForeignKey('user.uid'), nullable=True)

    @declared_attr
    def updated_by_uid(self):
        return Column(Integer, ForeignKey('user.uid'), nullable=True)


class BaseAuditDBModel(DBModel, TrailMixin):
    __abstract__ = True


class BaseAuditModel(BaseModel):
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    created_by_uid: Optional[str] = None
    created_by: Optional[UserSchema] = None
    updated_by_uid: Optional[str] = None
    updated_by: Optional[UserSchema] = None
