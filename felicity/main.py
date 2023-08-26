from sanic import Sanic
from sanic.worker.loader import AppLoader
from functools import partial
from adapters.application import register_felicity

if __name__ == "__main__":
    loader = AppLoader(factory=partial(register_felicity))
    app = loader.load()
    app.prepare(host="0.0.0.0", port=8001, dev=True)
    Sanic.serve(primary=app, app_loader=loader)
