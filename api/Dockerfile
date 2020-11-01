FROM python:3.6

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app/api
COPY requirements.txt /app/api
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ['uvicorn', 'app:app', '--host', '0.0.0.0', '--reload']
