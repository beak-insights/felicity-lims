from abc import ABC, abstractmethod

from domain.shared.ports.repository import IBaseRepository


class JobRepository(IBaseRepository, ABC):
    ...
