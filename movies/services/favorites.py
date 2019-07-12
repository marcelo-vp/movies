from pymongo import MongoClient

mongo_client = MongoClient()

db = mongo_client.movies_app
movies = db.movies

def add_favorite(movie_data):
    new_favorite = {
        'title': movie_data["title"],
        'image': movie_data["image"],
        'plot': movie_data["plot"]
    }
    movies.insert_one(new_favorite)

    return { "added": True }

def list_favorites():
    favorites = []
    for movie in movies.find():
        del movie['_id']
        favorites.append(movie)

    return { "favorites": favorites }
