from abc import ABC

from domain.errlog.schemas import ErrorLog
from domain.shared.ports.service import IBaseService


class IErrorLogService(IBaseService[ErrorLog], ABC):
    pass
