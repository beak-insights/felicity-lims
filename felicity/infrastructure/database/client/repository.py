from domain.client.ports.repository import (
    IClientRepository, 
    IClientContactRepository
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.client.entities import Client, ClientContact


class ClientRespository(BaseRepository[Client], IClientRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Client
        super().__init__(db)


class ClientContactRespository(BaseRepository[ClientContact], IClientContactRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ClientContact
        super().__init__(db)