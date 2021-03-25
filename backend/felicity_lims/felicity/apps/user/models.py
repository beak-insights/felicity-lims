import logging

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, backref

from felicity.apps.core.utils import is_valid_email
from felicity.core.security import verify_password
from . import conf
from .abstract import (
    AbstractBaseUser,
    AbstractAuth
)
from felicity.apps.user import schemas

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# TODO: Refactor User to LaboratoryContact, UserAuth to ContactAuth

class UserAuth(AbstractAuth):
    """Authentication class user access
    @param user_type is dynamically accessed and values are:
    ccuser: client contacts
    lcuser: laboratory contacts
    dcuser: dispatch center contacts
    """
    user_type = Column(String, nullable=True)

    def acquire_user_type(self, user_type):
        _update = {**self.to_dict(), **{'user_type': user_type}}
        self.update(**_update)

    def has_access(self, password):
        if self.is_blocked:
            raise Exception("Blocked Account: Reset Password to regain access")
        #  dynamically get self.ccuser / self.lcuser / self.dcuser
        _user = getattr(self, self.user_type)
        if not _user:
            raise Exception("Authentication disabled for this account. Contact Admin to re-link")
        if not getattr(_user, 'is_active'):  # e.g self.ccuser.is_active
            raise Exception("In active account: contact administrator")

        # logger.info(f"auth-user type == {self.user_type}")       

        auth_obj = self.to_dict()  # jsonable_encoder(self)
        retries = self.login_retry
        if not verify_password(password, self.hashed_password):
            msg = ""
            if self.login_retry < 3:
                retries += 1
                msg = f'Wrong Password {3 - retries} attempts left'
                auth_obj['login_retry'] = retries
                if retries == 3:
                    auth_obj['is_blocked'] = True
                    msg = f"Sorry your Account has been Blocked"
            self.update(auth_obj)
            raise Exception(msg)
        if self.login_retry != 0:
            auth_obj['login_retry'] = 0
            self.update(auth_obj)
        return self

    def authenticate(self, username, password):
        if is_valid_email(username):
            raise Exception("Use your username authenticate")
        auth_obj = self.get_by_username(username)
        return auth_obj.has_access(password)


class User(AbstractBaseUser):
    auth_uid = Column(Integer, ForeignKey('userauth.uid'))
    auth = relationship("UserAuth", backref=backref(conf.LABORATORY_CONTACT, uselist=False))

    @classmethod
    def create(cls, user_in: schemas.UserCreate) -> schemas.User:
        data = cls._import(user_in)
        return super().create(**data)

    def update(self, user_in: schemas.UserUpdate) -> schemas.User:
        data = self._import(user_in)
        return super().update(**data)

    @property
    def user_type(self):
        return conf.LABORATORY_CONTACT

    def propagate_user_type(self):
        """sets the user_type field in auth"""
        self.auth.acquire_user_type(conf.LABORATORY_CONTACT)

    def unlink_auth(self):
        auth = self.auth
        _update = {**self.to_dict(), **{'auth_uid': None, 'auth': None}}
        self.update(**_update)
        if not self.auth:
            auth.delete()

    def link_auth(self, auth_uid):
        _update = {**self.to_dict(), **{'auth_uid': auth_uid}}
        self.update(**_update)
