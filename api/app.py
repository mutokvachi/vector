from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route
from starlette.config import Config
import databases
import sqlalchemy

config = Config('.env')
DATABASE_URL = config('DATABASE_URL')
database = databases.Database(DATABASE_URL)

metadata = sqlalchemy.MetaData()


async def homepage(request):
    return JSONResponse({'Running': True})


routes = [
    Route('/', homepage),
]

app = Starlette(
    debug=True,
    routes=routes,
    on_startup=[database.connect],
    on_shutdown=[database.disconnect]
)
