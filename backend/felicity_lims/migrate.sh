#! /usr/bin/env bash

echo "CREATING A NEW REVISION ... ..."
# alembic revision --autogenerate -m "${1}"
echo "MIGRATING THE DB ... ..."
alembic upgrade head
echo "DONE ... ..."