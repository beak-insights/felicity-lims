"""Note:
    - The felicity app must be created first before importing other modules.
    - This is important to register felicity in sanic registry
"""
# import uvicorn
# from sanic import Sanic
#
#
# if __name__ == "__main__":
#     from adapters.application import container
#
#     ct = container.Container()
#
#     felicity = Sanic("felicity-hexagonal")
#     felicity.ctx.container = ct
#     from adapters.application import register_felicity, container
#
#     felicity = register_felicity(felicity)
#
#     uvicorn.run(app=felicity, host="0.0.0.0", port=8081)
#     # felicity.run(host="0.0.0.0", port=8001, debug=True)



from sanic import Sanic
from sanic.worker.loader import AppLoader
from functools import partial
from adapters.application import register_felicity

if __name__ == "__main__":
    loader = AppLoader(factory=partial(register_felicity))
    app = loader.load()
    app.prepare(host="0.0.0.0", port=8000, dev=True)
    Sanic.serve(primary=app, app_loader=loader)
