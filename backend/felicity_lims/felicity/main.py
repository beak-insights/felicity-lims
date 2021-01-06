from felicity.init import initialize_felicity
if initialize_felicity():
    from fastapi import FastAPI
    from starlette.middleware.cors import CORSMiddleware
    from graphql.execution.executors.asyncio import AsyncioExecutor

    from felicity.database.session import database # noqa

    from felicity.api.api_v1.api import api_router # noqa
    from felicity.core.config import settings # noqa

    from starlette.graphql import GraphQLApp
    from felicity.gql.schema import gql_schema # noqa

    flims = FastAPI(
        title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json"
    )

    @flims.on_event("startup")
    async def startup():
        await database.connect()

    @flims.on_event("shutdown")
    async def shutdown():
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

    flims.include_router(api_router, prefix=settings.API_V1_STR)
    flims.add_route("/felicity-gql", GraphQLApp(schema=gql_schema, executor_class=AsyncioExecutor))
