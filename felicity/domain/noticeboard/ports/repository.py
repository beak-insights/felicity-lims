from abc import ABC

from domain.shared.ports.repository import IBaseRepository


class INoticeRepository(IBaseRepository, ABC):
    ...
