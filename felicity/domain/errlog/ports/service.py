from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.errlog.schemas import ErrorLog


class IErrorLogService(IBaseService[ErrorLog], ABC):
    ...
