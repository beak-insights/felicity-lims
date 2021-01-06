from typing import Optional

from pydantic import BaseModel

# 
# Client Schemas
# 

# Shared properties
class ClientBase(BaseModel):
    name: Optional[str] = None
    code: Optional[str] = None
    district_uid: Optional[str] = None    
    email: Optional[str] = None
    email_cc: Optional[str] = None
    consent_email: Optional[str] = None
    mobile_phone: Optional[str] = None
    business_phone: Optional[str] = None
    consent_sms: Optional[str] = None
    active: Optional[bool] = True

class ClientBaseInDB(ClientBase):
    uid: Optional[str] = None

    class Config:
        orm_mode = True

# Properties to receive via API on creation
class ClientCreate(ClientBase):
    district_uid: str

# Properties to receive via API on update
class ClientUpdate(ClientBase):
	pass

# Properties to return via API
class Client(ClientBaseInDB):
    pass

# Properties stored in DB
class ClientInDB(ClientBaseInDB):
	pass