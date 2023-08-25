from typing import Any

from pydantic import ValidationError
from sanic.request import Request
from jose import jwt

from domain.shared.schemas import TokenPayload
from domain.user.ports.service import IUserService, User
from core import security
from core.setting import settings
from adapters.exceptions import NoAuthentcationTokenError


class BaseDependencyService:
    user_service: IUserService

    async def get_current_user(self, token: str = None) -> User:
        if not token:
            raise NoAuthentcationTokenError
        try:
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
            )
            token_data = TokenPayload(**payload)
        except (jwt.JWTError, ValidationError) as e:
            return None

        return await self.user_service.get(uid=token_data.sub)

    async def get_current_active_user(self, token: str = None) -> User:
        current_user = await self.get_current_user(token=token)
        if not current_user or not current_user.is_active:
            return None
        return current_user

    async def get_app_context(self, request: Request) -> Any:
        ctx = {"user": None}
        if "Authorization" in request.headers:
            authorization = request.headers.get("Authorization", None)
            if not authorization:
                return {"user": None}
            _, credentials = authorization.split()
            ctx["user"] = await self.get_current_active_user(credentials)

        return ctx

    async def get_auth_user(self, request: Request) -> Any:
        if "Authorization" in request.headers:
            authorization = request.headers.get("Authorization", None)
            if not authorization:
                return {"user": None}
            _, credentials = authorization.split()
            return await self.get_current_active_user(credentials)

        return None
