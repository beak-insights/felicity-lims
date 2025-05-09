import multiprocessing
import os

from dotenv import load_dotenv

load_dotenv()

name = "gunicorn config for Felicity LiMS systemd daemon"
accesslog = "/var/logs/felicity-gunicorn-access.log"
errorlog = (
    "/var/logs/felicity-gunicorn-error.log"
)

bind = "0.0.0.0:8000"

worker_class = "uvicorn.workers.UvicornWorker"
workers = multiprocessing.cpu_count() * 2 + 1
worker_connections = 1024
backlog = 2048
max_requests = 5120
timeout = 120
keepalive = 2

debug = os.environ.get("DEBUG", "false") == "true"
reload = debug
preload_app = False
daemon = False
