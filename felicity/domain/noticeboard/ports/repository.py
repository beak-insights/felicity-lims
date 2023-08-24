from abc import ABC

from domain.shared.ports.repository import IBaseRepository


class NoticeRepository(IBaseRepository, ABC): ...
