from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class IClientRepository(IBaseRepository, ABC):
    ...


class IClientContactRepository(IBaseRepository, ABC):
    ...
