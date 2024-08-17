FROM debian:bullseye-slim

EXPOSE 3000

WORKDIR /app
COPY . /app

RUN apt-get update || (sleep 30 && apt-get update) && \
    apt-get install -y --no-install-recommends \
    python3 \
    python3-venv \
    python3-pip \
    gcc \
    build-essential \
    npm

RUN python3 -m venv /app/my_venv
RUN /app/my_venv/bin/pip install -r requirements.txt

CMD ["/app/my_venv/bin/python3", "api.py"]