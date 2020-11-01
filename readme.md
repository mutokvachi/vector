# Description

It is a just setup where you can run application with python3.6 (starlette), react, postgresql. 

I started with this step (`Part 4: Deployment`) because I dont have installed all of these frameworks on my local machine.So intead of installing them on my machine I used docker.


## Running
1. `cd api && cp .env.example .env`
2. `docker-compose build`
3. `docker-compose up`

## Result
1. Running react app on `localhost:3000`
2. Running starlette app on `localhost:8000`
3. Running postgresql on the port `5432`
4. Connection between each other is opened
