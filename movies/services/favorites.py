from movies.constants import FAVORITE_COLUMNS
from movies.database.favorites import Favorites

favorites = Favorites()

def add_favorite(movie_data):
    for column in FAVORITE_COLUMNS:
        movie_data[column.lower()] = movie_data[column]
        del movie_data[column]

    favorites.add_favorite(movie_data)
    return { "added": True }

def list_favorites():
    favorites_list = favorites.list_favorites()
    return { "favorites": favorites_list }

def remove_favorite(movie_name):
    favorites.remove_favorite(movie_name)
    return { "deleted": True }
