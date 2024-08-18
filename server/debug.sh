#!/bin/bash

python3 -m venv my_venv
my_venv/bin/pip install -r requirements.txt
my_venv/bin/python3 api.py