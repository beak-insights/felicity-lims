# -*- coding: utf-8 -*-

import asyncio
import subprocess

import typer
from uvicorn import Config, Server

from felicity.almigrator import FelicityMigrator
from felicity.logcong import LOGGING_CONFIG

alembic_service = FelicityMigrator()
app = typer.Typer()


@app.command()
def runserver(
    host: str = "0.0.0.0",
    port: int = 8000,
    workers: int = 1,
    reload: bool = False,
    colors: bool = True,
) -> None:
    """Felicity LIMS Server"""
    config = Config(
        app="felicity.main:felicity",
        host=host,
        port=port,
        workers=workers,
        reload=reload,
        use_colors=colors,
        log_config=LOGGING_CONFIG,
    )
    Server(config).run()


@app.command()
def gunicorn(
    host: str = "0.0.0.0",
    port: int = 8000,
    workers: int = 1,
    reload: bool = False,
    colors: bool = True,
) -> None:
    """Felicity LIMS Server"""
    # Build the command to run gunicorn with uvicorn workers
    command = [
        "gunicorn",
        f"--bind={host}:{port}",
        f"--workers={workers}",
        "--reload" if reload else "",
        "--log-level=info",
        "--access-logfile=-" if colors else "",
        "felicity.main:felicity",
        "--worker-class=uvicorn.workers.UvicornWorker",
    ]

    # Join the command list into a single string and print it for debugging
    cmd_str = " ".join(command)
    print(f"Running command: {cmd_str}")

    # Execute the command
    subprocess.run(cmd_str, shell=True, check=True)


@app.command()
def upgrade(
    revision: str = typer.Option("head", help="Target revision to upgrade to"),
) -> None:
    """Upgrade to a specified revision."""
    alembic_service.upgrade(revision)
    typer.echo(f"Upgraded to revision: {revision}")


@app.command()
def downgrade(
    revision: str = typer.Argument(..., help="Target revision to downgrade to"),
) -> None:
    """Downgrade to a specified revision."""
    alembic_service.downgrade(revision)
    typer.echo(f"Downgraded to revision: {revision}")


@app.command()
def revision(
    message: str = typer.Argument(..., help="Message for the new revision"),
) -> None:
    """Not working --- no idea why yet
    Create a new Alembic revision with a message."""
    alembic_service.create_revision(message)
    typer.echo(f"Created new revision with message: {message}")


@app.command()
def current() -> None:
    """Show the current database revision."""
    alembic_service.current()


@app.command()
def history() -> None:
    """Show the revision history."""
    alembic_service.history()


@app.command()
def updates() -> None:
    """Check for updates"""
    asyncio.run(alembic_service.check_for_updates())


def main() -> None:
    app()
