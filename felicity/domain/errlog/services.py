from domain.shared.services import BaseService
from domain.errlog.ports.service import IErrorLogService
from domain.errlog.schemas import ErrorLog


class ErrorLogService(BaseService[ErrorLog], IErrorLogService):
    ...
