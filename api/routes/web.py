from starlette.routing import Route
from api.controllers.card import get_cards, create, sort, database

db = database

routes = [
    Route('/list', get_cards),
    Route('/create', create, methods=['POST']),
    Route('/sort', sort, methods=['POST'])
]
