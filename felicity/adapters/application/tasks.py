import requests, httpx
from sanic import Sanic, json, HTTPResponse


from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.interval import IntervalTrigger

from adapters.graphql.dependencies import IDependencyService

scheduler = AsyncIOScheduler()


async def check_tasks():
    print("posting ...")
    d = await httpx.post("/task-runner", json={"init": True})


def init_scheduler(app: Sanic):
    @app.post("/task-runner")
    def task_checker(deps: IDependencyService) -> HTTPResponse:
        print(deps)
        return json({"running": True})

    scheduler.add_job(
        func=check_tasks, trigger=IntervalTrigger(seconds=10), id="felicity_wf"
    )
    scheduler.start()

    return app
