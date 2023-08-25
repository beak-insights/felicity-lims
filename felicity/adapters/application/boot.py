from sanic import Sanic, HTTPResponse
from sanic_ext import Extend
from sanic.response import json

from adapters.graphql.schema import schema
from adapters.graphql.view import AppGraphQLView, Request
from adapters.graphql.dependencies import IDependencyService, register_dependencies


from core.setting import settings
from .container import Container
from .tasks import init_scheduler


def register_configs(app: Sanic):
    app.config.update(settings.__dict__)
    Extend(app)
    return app


def register_blueprints(app: Sanic):
    @app.get("/health")
    def h(_) -> HTTPResponse:
        return json({"status": "pong"})

    return app


def register_graphql(app: Sanic):
    @app.post("/felicity-gql")
    def gql_pist(request: Request, deps: IDependencyService):
        request.ctx.deps = deps
        return AppGraphQLView(schema=schema, graphiql=True).post(request)

    @app.get("/felicity-gql")
    def gql_get(request: Request, deps: IDependencyService):
        request.ctx.deps = deps
        return AppGraphQLView(schema=schema, graphiql=True).get(request)

    return app


def register_felicity():
    app = Sanic("felicity-hexagonal")
    container = Container()
    app.ctx.container = container

    register_configs(app)
    register_dependencies(app)
    register_blueprints(app)
    register_graphql(app)
    init_scheduler(app)

    return app
