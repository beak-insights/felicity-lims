from graphql import GraphQLError
from jose import jwt
from pydantic import ValidationError
from sqlalchemy.orm import Session

from felicity.apps.user import crud, models # noqa
from felicity.apps.core import schemas as core_schemas # noqa
from felicity.core import security # noqa
from felicity.core.config import settings # noqa
from felicity.database.session import SessionScoped # noqa

# synchronous database
sync_db = SessionScoped.session_factory()


def get_current_user(db: Session = sync_db, token: str = None) -> models.User:
    if not token:
        GraphQLError("No auth token")
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = core_schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise GraphQLError("Could not validate credentials")
    user = crud.user.get(db, id=token_data.sub)
    if not user:
        raise GraphQLError("User not found!")
    return user


def get_current_active_user(token: str = None) -> models.User:
    current_user = get_current_user(token=token)
    if not crud.user.is_active(current_user):
        raise GraphQLError("Inactive User")
    return current_user


def get_current_active_superuser(token: str = None) -> models.User:
    current_user = get_current_user(token=token)
    if not crud.user.is_superuser(current_user):
        raise GraphQLError("The user doesn't have enough privileges")
    return current_user
