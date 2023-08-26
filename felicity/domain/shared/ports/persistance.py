from typing import Protocol
from contextlib import contextmanager, AbstractContextManager
from typing import Callable


class PersistenceProtocol(Protocol):

    @contextmanager
    def async_session(self) -> Callable[..., AbstractContextManager]:
        ...
