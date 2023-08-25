from domain.shared.services import BaseService
from domain.exceptions import NotFoundError, AlreadyExistsError
from domain.errlog.ports.service import IErrorLogService
from domain.errlog.schemas import ErrorLog


class ErrorLogService(BaseService[ErrorLog], IErrorLogService):
    ...
