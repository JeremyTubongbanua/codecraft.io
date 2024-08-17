#!/bin/bash
FULL_PATH_TO_SCRIPT="$(realpath "${BASH_SOURCE[0]}")"
SCRIPT_DIRECTORY="$(dirname "$FULL_PATH_TO_SCRIPT")"
cd "$SCRIPT_DIRECTORY"

git fetch
git reset --hard upstream/main

cd ..
npm i
npm run build
sudo docker build -t codecraft.io_web .
