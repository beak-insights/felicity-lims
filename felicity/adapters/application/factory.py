import logging

from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.interval import IntervalTrigger
from requests import post
from sanic import Sanic, HTTPResponse
from sanic.response import json
from sanic_ext import Extend

from adapters.application.container import register_dependencies
from adapters.graphql.dependencies import IDependencyService
from adapters.graphql.schema import schema
from adapters.graphql.view import AppGraphQLView, Request
from core.setting import settings
from domain.job.ports.service import IJobWorkerService

log = logging.getLogger("apscheduler.executors.default")
log.setLevel(logging.WARNING)


def register_configs(app: Sanic):
    app.config.update(settings.__dict__)
    Extend(app)


def register_blueprints(app: Sanic):
    @app.get("/health")
    def h(_) -> HTTPResponse:
        return json({"status": "pong"})


def register_graphql(app: Sanic):
    @app.post("/felicity-gql")
    def gql_post(request: Request, deps: IDependencyService):
        request.ctx.deps = deps
        return AppGraphQLView(schema=schema, graphiql=True).post(request)

    @app.get("/felicity-gql")
    def gql_get(request: Request, deps: IDependencyService):
        request.ctx.deps = deps
        return AppGraphQLView(schema=schema, graphiql=True).get(request)


def register_job_runner(app: Sanic):
    @app.post("/job-runner")
    async def job_runner(request: Request, worker: IJobWorkerService):
        # await worker.run_jobs_if_exists()
        request.app.add_task(worker.run_jobs_if_exists)
        return json({"ok": "ok"})

    def invoke_task_runner():
        post("http://localhost:8002/job-runner", json={"run": True})

    @app.listener("after_server_start")
    async def run_jons(a, l):
        scheduler = AsyncIOScheduler()
        scheduler.add_job(
            func=invoke_task_runner,
            trigger=IntervalTrigger(seconds=5),
            id="felicity_wf",
        )
        scheduler.start()


def register_felicity():
    app = Sanic("felicity-hexagonal")

    register_configs(app)
    register_dependencies(app)
    register_blueprints(app)
    register_graphql(app)
    register_job_runner(app)

    return app
