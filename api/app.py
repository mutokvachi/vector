import sys
import sqlalchemy
from starlette.config import Config
from starlette.middleware import Middleware
from starlette.applications import Starlette
from starlette.middleware.cors import CORSMiddleware
sys.path.append('..')
from api.routes.web import routes, db


config = Config('.env')
DATABASE_URL = config('DATABASE_URL')
metadata = sqlalchemy.MetaData()

middleware = [
    Middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'])
]

app = Starlette(
    debug=True,
    routes=routes,
    middleware=middleware,
    on_startup=[db.connect],
    on_shutdown=[db.disconnect]
)
