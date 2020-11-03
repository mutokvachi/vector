import random
import databases
from api.models.cards import Card
from starlette.config import Config
from starlette.responses import JSONResponse

config = Config('.env')
DATABASE_URL = config('DATABASE_URL')
database = databases.Database(DATABASE_URL)


# Function which generates fake images in random order
def get_fake_image():
    images = [
        'https://eskipaper.com/images/high-resolution-photos-1.jpg',
        'https://visme.co/blog/wp-content/uploads/2020/07/Header-1200-500x280.png',
        'https://visme.co/blog/wp-content/uploads/2020/09/Header-1200-5-500x280.png',
        'https://i.pinimg.com/originals/57/9e/d2/579ed2cedf82391c07ec8ca6d4812693.jpg',
        'https://www.larotonde.ca/wordpress2/wp-content/uploads/2020/10/pr%C3%A9carit%C3%A9%C3%A9tudiante-500x280.png'
    ]

    return images[random.randint(0, 4)]


# Async function endpoint for returning card list
async def get_cards(request):
    query = Card.select()
    content = await get_card(query)

    return JSONResponse(content)


# This is a private function for running card query
async def get_card(query):
    results = await database.fetch_all(query)
    content = [
        {
            "id": result["id"],
            "position": result["position"],
            "title": result["title"],
            "type": result["type"],
            "image": result["image"],
        }
        for result in results
    ]
    return content


# For creating new item
async def create(request):
    data = await request.json()
    query = Card.insert().values(
        title=data['title'],
        type=data['type'],
        image=get_fake_image()
    )

    last_id = await database.execute(query)
    last_card_query = Card.select().where(Card.c.id == last_id)
    content = await get_card(last_card_query)

    return JSONResponse(content[0])


# To re-position cards
async def sort(request):
    items = await request.json()

    for key, item in enumerate(items['positions']):
        query = Card.update().where(Card.c.id == item).values(position=key)
        await database.execute(query)

    return JSONResponse({'Sorted': True})
