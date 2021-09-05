from felicity.init import initialize_felicity
if initialize_felicity():
    import logging
    from typing import List
    from fastapi import FastAPI, WebSocket
    from starlette.middleware.cors import CORSMiddleware
    from graphql.execution.executors.asyncio import AsyncioExecutor

    from starlette.middleware.authentication import AuthenticationMiddleware
    from starlette.authentication import (
        AuthenticationBackend,
        AuthenticationError,
        SimpleUser,
        # UnauthenticatedUser,
        AuthCredentials
    )
    import base64
    import binascii

    from felicity.database.session import database # noqa

    from felicity.api.api_v1.api import api_router # noqa
    from felicity.core.config import settings # noqa

    from starlette.graphql import GraphQLApp
    from felicity.gql.schema import gql_schema # noqa
    from felicity.gql.deps import get_current_active_user

    from felicity.apps.job.sched import felicity_workforce_init, felicity_halt_workforce

    logging.basicConfig(level=logging.INFO)
    logger = logging.getLogger(__name__)

    class FelicityAuthBackend(AuthenticationBackend):
        async def authenticate(self, request):
            # logger.info(f"trial middle ware: {request}")
            # logger.info(f"trial middle ware: {dir(request)}")
            if "Authorization" not in request.headers:
                logger.info(f"No Authorization Data")
                return

            # logger.info(f"Authorization checking: {request.headers}")

            auth = request.headers["Authorization"]
            try:
                scheme, credentials = auth.split()
                if scheme.lower() == 'basic':
                    decoded = base64.b64decode(credentials).decode("ascii")
                    username, _, password = decoded.partition(":")
                    # TODO: You'd want to verify the username and password here if needed
                elif scheme.lower() == 'bearer':
                    """"get is active user from token"""
                    # logger.info(f"credentials bearer: {credentials}")
                    user = get_current_active_user(credentials)
                    # logger.info(f"User from token: {user.auth.user_name}")
                    username, _, password = user.auth.user_name, None, None
                else:
                    raise AuthenticationError(f'UnKnown Authentication Backend: {scheme.lower()}')

                return AuthCredentials(["authenticated"]), SimpleUser(username)

            except (ValueError, UnicodeDecodeError, binascii.Error) as exc:
                raise AuthenticationError(f'Invalid auth credentials: {exc}')


    flims = FastAPI(
        title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json"
    )

    @flims.on_event("startup")
    async def startup():
        await database.connect()
        felicity_workforce_init()

    @flims.on_event("shutdown")
    async def shutdown():
        felicity_halt_workforce()
        await database.disconnect()
        
    # Set all CORS enabled origins
    if settings.BACKEND_CORS_ORIGINS:
        flims.add_middleware(
            CORSMiddleware,
            allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

    flims.add_middleware(
        AuthenticationMiddleware,
        backend=FelicityAuthBackend()
    )

    flims.include_router(api_router, prefix=settings.API_V1_STR)
    flims.add_route("/felicity-gql", GraphQLApp(schema=gql_schema, executor_class=AsyncioExecutor))

    class ConnectionManager:
        def __init__(self):
            self.connections: List[WebSocket] = []

        async def connect(self, websocket: WebSocket):
            await websocket.accept()
            self.connections.append(websocket)

        async def broadcast(self, data: str):
            for connection in self.connections:
                await connection.send_text(data)


    manager = ConnectionManager()

    @flims.websocket("/ws")
    async def websocket_endpoint(websocket: WebSocket):
        await manager.connect(websocket)
        while True:
            data = await websocket.receive_text()
            await manager.broadcast(f"Client {data}")
