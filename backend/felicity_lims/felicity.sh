#! /usr/bin/env bash
# use bash for child process and source for same bash process
__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# run migrate
source ${__dir}/migrate.sh "ini felicity $(date)"

# then start server
source ${__dir}/runserver.sh