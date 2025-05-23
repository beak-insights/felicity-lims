import base64
import inspect
import json
from typing import Any, Generic, NewType, TypeVar

import strawberry

from felicity.apps.common.utils.serializer import marshaller

T = TypeVar("T")

JSONScalar = strawberry.scalar(
    NewType("JSONScalar", Any),
    serialize=lambda v: marshaller(v),
    parse_value=lambda v: json.loads(v),
    description="json field",
)


class BytesEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, bytes):
            return obj.decode("utf-8")
        return json.JSONEncoder.default(self, obj)


BytesScalar = strawberry.scalar(
    NewType("BytesScalar", bytes),
    serialize=lambda v: base64.b64encode(v).decode("utf-8"),
    parse_value=lambda v: base64.b64decode(v),
)


@strawberry.type
class PageInfo:
    has_next_page: bool
    has_previous_page: bool
    start_cursor: str | None = None
    end_cursor: str | None = None


@strawberry.type
class DeletedItem:
    uid: str


@strawberry.type
class MessagesType:
    message: str


@strawberry.type
class OperationError:
    error: str
    suggestion: str | None = ""


@strawberry.type
class OperationSuccess:
    message: str


DeleteResponse = strawberry.union(
    "DeleteResponse",
    (DeletedItem, OperationError),
    description="Union of possible outcomes when deleting some object",
)

MessageResponse = strawberry.union(
    "MessageResponse",
    (MessagesType, OperationError),
    description="Union of possible outcomes when deleting some object",
)

SuccessErrorResponse = strawberry.union(
    "SuccessErrorResponse",
    (OperationSuccess, OperationError),
    description="Union of possible outcomes when deleting some object",
)


class StrawberryMapper(Generic[T]):
    def map(self, exclude: list[str] | None = None, **kwargs) -> T:
        if exclude is None:
            exclude = []
        type_class = getattr(self, "__orig_class__").__args__[0]
        # Get the annotations from the Strawberry type
        attrs = type_class.__dict__.get("__annotations__", {})

        # Identify methods in the class for exclusion
        methods = {
            name: method for name, method in type_class.__dict__.items()
            if inspect.isfunction(method) or inspect.ismethod(method)
               and not name.startswith('_')
        }
        exclude.extend(list(methods.keys()))

        # Remove keys not in the Strawberry type from the payload
        keys = list(kwargs.keys())
        for key in keys:
            if key in exclude or key not in attrs:
                del kwargs[key]

        # Create an instance of the Strawberry type
        return type_class(**kwargs)
