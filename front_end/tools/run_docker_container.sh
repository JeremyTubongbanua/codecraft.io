#!/bin/bash
FULL_PATH_TO_SCRIPT="$(realpath "${BASH_SOURCE[0]}")"
SCRIPT_DIRECTORY="$(dirname "$FULL_PATH_TO_SCRIPT")"
cd "$SCRIPT_DIRECTORY"

sudo docker run --rm --name codecraft.io_web_container -d -p 80:80 codecraft.io_web