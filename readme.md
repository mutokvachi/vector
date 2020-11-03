# Day N3: Parts 2/3 Finished

I have running application on docker container. With different config files for both `frontend` and `api` projects. Using alembic for creation of postgress model and migration. This is the minimum of the project, we can also add here some features like error handling,validations... But its a testing project so I tried to show you my skills like that. Please check the installation once more, because I added alembic migration command there.  


# Day N2: Frontend features added

I have finished `Part 1: Front End`. Now its running without backend but for tommorrow I am going to integrate backend. You just need to pull/clone the repository from git and follow the installation commands below 


# Day N1: Description

It is a just setup where you can run application with python3.6 (starlette), react, postgresql. 

I started with this step (`Part 4: Deployment`) because I dont have installed all of these frameworks on my local machine.So intead of installing them on my machine I used docker.


## Running
1. `cd api && cp .env.example .env`
2. `docker-compose build`
3. `docker-compose up`
4. `docker exec -it starlette alembic upgrade head`

## Result
1. Running react app on `localhost:3000`
2. Running starlette app on `localhost:8000`
3. Running postgresql on the port `5432`
4. Connection between each other is opened
