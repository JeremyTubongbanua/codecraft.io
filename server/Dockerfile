FROM ubuntu

EXPOSE 3000

COPY . /app
WORKDIR /app
RUN apt-get update
RUN apt-get install -y python3 python3-venv python3-pip
RUN python3 -m venv /app/my_venv
RUN . /app/my_venv/bin/activate
RUN /app/my_venv/bin/pip install -r requirements.txt
SHELL ["/bin/bash", "-c"]
CMD ["/app/my_venv/bin/python3", "api.py"]
