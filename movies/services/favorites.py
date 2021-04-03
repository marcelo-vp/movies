from movies.constants import FAVORITE_COLUMNS
from movies.database.favorites import Favorites

def get_clean_movie_data(movie):
    clean_data = {}

    for k, v in movie.items():
        if k in FAVORITE_COLUMNS:
            clean_data[k.lower()] = v

    return clean_data

def omit_db_info(movie):
    user_movie = {}

    for k, v in movie.__dict__.items():
        if k != '_sa_instance_state':
            user_movie[k] = v

    return user_movie

def add_favorite(movie_data):
    clean_data = get_clean_movie_data(movie_data)
    Favorites.add(clean_data)
    return { "added": True }

def list_favorites():
    db_list = Favorites.list_()

    favorites_list = [
        omit_db_info(db_movie)
        for db_movie in db_list
    ]

    return { "favorites": favorites_list }

def remove_favorite(movie_name):
    Favorites.remove(movie_name)
    return { "deleted": True }
