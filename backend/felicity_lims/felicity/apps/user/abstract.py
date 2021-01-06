from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import relationship

from felicity.core.security import get_password_hash
from felicity.database.base_class import DBModel
from felicity.apps.user import schemas


class AbstractBaseUser(DBModel):
    __abstract__ = True
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)    
    email = Column(String, unique=True, index=True, nullable=False)
    mobile_phone = Column(String, nullable=True)
    business_phone = Column(String, nullable=True)
    is_active = Column(Boolean(), default=True)
    is_superuser = Column(Boolean(), default=False)
    
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    @classmethod
    def create(cls, user_in: schemas.UserCreate) -> schemas.User:
        data = cls._import(user_in)
        return super().create(**data)

    def update(self, user_in: schemas.UserUpdate) -> schemas.User:
        data = self._import(user_in)
        return super().update(**data)   
    
    @classmethod
    def get_by_email(cls, email):
        user = cls.get(email=email)
        if not user:
            return None
        return user
    
    def give_super_powers(self):
        user_obj = jsonable_encoder(self)        
        user_in = UserUpdate(**user_obj)
        user_in.is_superuser = True
        self.update(**user_in)
    
    def strip_super_powers(self):
        user_obj = jsonable_encoder(self)        
        user_in = UserUpdate(**user_obj)
        user_in.is_superuser = False
        self.update(**user_in)
    
    def activate(self):
        user_obj = jsonable_encoder(self)        
        user_in = UserUpdate(**user_obj)
        user_in.is_active = True
        self.update(**user_in)
    
    def deactivate(self):
        user_obj = jsonable_encoder(self)        
        user_in = UserUpdate(**user_obj)
        user_in.is_active = False
        self.update(**user_in)
    
        
class AbstractAuth(DBModel):
    __abstract__ = True
    user_name = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    login_retry = Column(Integer)
    is_blocked = Column(Boolean(), default=False)
    
    @property
    def has_password(self):
        return True if self.hashed_password else False
    
    @classmethod
    def get_by_username(cls, username):
        auth = cls.get(user_name=username)
        if not auth:
            raise Exception("Invalid username, try again")
        return auth 

    @classmethod
    def create(cls, auth_in: schemas.AuthCreate) -> schemas.User:
        if cls.get_by_username(auth_in.user_name):
            raise Exception("Username already exist")
        hashed_password = get_password_hash(auth_in.password)
        data = cls._import(auth_in)
        del data["password"]
        data["hashed_password"] = hashed_password
        return super().create(**data)

    def update(self, auth_in: schemas.AuthUpdate) -> schemas.User:
        update_data = self._import(auth_in)
            
        if 'password' in update_data:
            hashed_password = get_password_hash(update_data["password"])
            del update_data["password"]
            update_data["hashed_password"] = hashed_password
        if 'user' in update_data:
            del update_data['user']
        return super().update(**update_data)