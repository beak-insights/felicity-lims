from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.orm import backref

from felicity.database.base_class import DBModel
from felicity.apps.user.abstract import AbstractBaseUser
from felicity.apps.user import conf
from felicity.apps.user.models import UserAuth
from felicity.apps.setup.models import District
from felicity.apps.setup.models import Province
from felicity.apps.client import schemas


# class ClientContact(AbstractBaseUser):
#     """Client Contact Focal person"""
#     auth_uid = Column(Integer, ForeignKey('userauth.uid'), nullable=True)
#     auth = relationship("UserAuth", backref=backref("user", uselist=False))
#     email_cc = Column(String, nullable=True)
#     consent_sms = Column(Boolean(), default=False)
    


class Client(DBModel):
    """Client/Facility"""
    name = Column(String, nullable=False)
    code = Column(String, index=True, unique=True, nullable=False)
    district_uid = Column(Integer, ForeignKey("district.uid"), nullable=True)
    district = relationship(District, backref="clients")
    province_uid = Column(Integer, ForeignKey("province.uid"), nullable=True)
    province = relationship(Province, backref="clients")
    email = Column(String, nullable=True)
    email_cc = Column(String, nullable=True)
    consent_email = Column(Boolean(), default=False)
    phone_mobile = Column(String, nullable=True)
    phone_business = Column(String, nullable=True)
    consent_sms = Column(Boolean(), default=False)
    active = Column(Boolean(), default=False)
    
    @classmethod
    def create(cls, obj_in: schemas.ClientCreate) -> schemas.Client:
        if cls.get(code=obj_in.code):
            raise Exception(f"Client with code {obj_in.code} already Exists")

        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.ClientUpdate) -> schemas.Client:
        data = self._import(obj_in)
        return super().update(**data)

    @property
    def get_province(self):
        if self.district:
            return self.district.province.name
        elif self.province:
            return self.province.name
        else:
            return ""        

    @property
    def get_country(self):
        if self.district:
            return self.district.province.country.name
        elif self.province:
            return self.province.country.name
        else:
            return ""


class ClientContact(AbstractBaseUser):
    auth_uid = Column(Integer, ForeignKey('userauth.uid'), nullable=True)
    auth = relationship(UserAuth, backref=backref(conf.CLIENT_CONTACT, uselist=False))
    email_cc = Column(String, nullable=True)
    consent_sms = Column(Boolean(), default=False)
    
    @property
    def user_type(self):
        return conf.CLIENT_CONTACT
    
    @property
    def propagate_user_type(self):
        """sets the user_type field in auth"""     
        self.auth.acquire_user_type(conf.CLIENT_CONTACT)
    
    def unlink_auth(self):
        auth = self.auth    
        _update = {**self.to_dict(), **{ 'auth_uid': None, 'auth': None }}
        self.update(_update)
        if not self.auth:
            auth.delete()
    
    def link_auth(self, auth_uid):       
        _update = {**self.to_dict(), **{ 'auth_uid': auth_uid }}
        self.update(_update)


