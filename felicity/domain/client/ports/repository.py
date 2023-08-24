from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class ClientRepository(IBaseRepository, ABC):
    ...
    
    
class ClientContactRepository(IBaseRepository, ABC):
    ...