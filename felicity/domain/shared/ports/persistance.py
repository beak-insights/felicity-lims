from typing import Protocol, AsyncContextManager


class PersistenceProtocol(Protocol):
    def async_scoped_session(self) -> AsyncContextManager:
        ...

    def async_session(self) -> AsyncContextManager:
        ...
