FROM ubuntu:latest
 
EXPOSE 3000

WORKDIR /app
COPY . /app

RUN apt-get update && apt-get install -y python3 python3-venv gcc npm

RUN python3 -m venv /app/my_venv
RUN /app/my_venv/bin/pip install -r requirements.txt

CMD ["/app/my_venv/bin/python3", "api.py"]

# python3 -m venv my_venv