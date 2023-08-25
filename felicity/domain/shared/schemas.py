from datetime import datetime
from typing import Optional, Any

from pydantic import BaseModel, ConfigDict
from pydantic import EmailStr


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenPayload(BaseModel):
    sub: str | None = None


class Message(BaseModel):
    msg: str


class SimpleUser(BaseModel):
    uid: str
    first_name: str | None = None
    last_name: str | None = None
    password: str | None = None
    user_name: str | None = None


class BaseAuditModel(BaseModel):
    created_at: datetime | None = None
    created_by_uid: str | None = None
    created_by: Optional[SimpleUser] = None  # noqa
    updated_at: datetime | None = None
    updated_by_uid: str | None = None
    updated_by: Optional[SimpleUser] = None  # noqa
