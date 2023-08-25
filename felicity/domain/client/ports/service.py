from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.client.schemas import Client, ClientContact


class IClientService(IBaseService[Client], ABC):
    ...


class IClientContactService(IBaseService[ClientContact], ABC):
    @abstractmethod
    async def propagate_user_type(self):
        ...

    @abstractmethod
    async def unlink_auth(self):
        ...

    @abstractmethod
    async def link_auth(self, auth_uid):
        ...

    @abstractmethod
    async def search(self, query: str):
        pass
