from typing import Any

LOGGING_CONFIG: dict[str, Any] = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "default": {
            "()": "uvicorn.logging.DefaultFormatter",
            "fmt": "%(asctime)s - %(name)s - %(levelprefix)s %(message)s",
            "use_colors": None,
        },
        "access": {
            "()": "uvicorn.logging.AccessFormatter",
            "fmt": '%(asctime)s - %(name)s - %(levelprefix)s  %(client_addr)s - "%(request_line)s" %(status_code)s',
            # noqa: E501
        },
        "access_file": {
            "()": "uvicorn.logging.AccessFormatter",
            "fmt": '%(asctime)s - %(name)s - %(levelprefix)s  %(client_addr)s - "%(request_line)s" %(status_code)s',
            # noqa: E501
            "use_colors": True,
        },
    },
    "handlers": {
        "file_handler": {
            "formatter": "access_file",
            "class": "logging.handlers.RotatingFileHandler",
            "filename": "/var/log/felicity-app.log",
            "mode": "a+",
            "maxBytes": 10 * 1024 * 1024,
            "backupCount": 5,
        },
        "default": {
            "formatter": "default",
            "class": "logging.StreamHandler",
            "stream": "ext://sys.stderr",
        },
        "access": {
            "formatter": "access",
            "class": "logging.StreamHandler",
            "stream": "ext://sys.stdout",
        },
    },
    "loggers": {
        "uvicorn": {"handlers": ["default"], "level": "INFO", "propagate": False},
        "uvicorn.error": {"level": "INFO"},
        "uvicorn.access": {
            "handlers": ["access", "file_handler"],
            "level": "INFO",
            "propagate": False,
        },
    },
}
