from typing import Optional

from pydantic import BaseModel, EmailStr


#  
#  User Schema
# 

# Shared properties
class UserBase(BaseModel):
    email: Optional[EmailStr] = None
    is_active: Optional[bool] = True
    is_superuser: bool = False
    first_name: Optional[str] = None
    last_name: Optional[str] = None


# Properties to receive via API on creation
class UserCreate(UserBase):
    pass


# Properties to receive via API on update
class UserUpdate(UserBase):
    auth_uid: Optional[str] = None


class UserInDBBase(UserBase):
    uid: Optional[int] = None

    class Config:
        orm_mode = True


# Additional properties to return via API
class User(UserInDBBase):
    pass


# Additional properties stored in DB
class UserInDB(UserInDBBase):
    pass


#  
#  Auth Schema
# 


# Shared properties
class AuthBase(BaseModel):
    user_name: Optional[str] = None
    password: Optional[str] = None
    login_retry: Optional[int] = 0
    is_blocked: Optional[bool] = False


# Properties to receive via API on creation
class AuthCreate(AuthBase):
    user_name: str
    password: str
    login_retry: int = 0
    is_blocked: bool = False

# Properties to receive via API on update
class AuthUpdate(AuthBase):
    pass


class AuthInDBBase(AuthBase):
    uid: Optional[int] = None

    class Config:
        orm_mode = True


# Additional properties to return via API
class Auth(AuthInDBBase):
    pass


# Additional properties stored in DB
class AuthInDB(AuthInDBBase):
    hashed_password: str
