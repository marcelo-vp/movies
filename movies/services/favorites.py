from movies.database.favorites import Favorites

favorites = Favorites()

def add_favorite(movie_data):
    new_favorite = {
        'title': movie_data["title"],
        'image': movie_data["image"],
        'plot': movie_data["plot"]
    }
    favorites.add_favorite(new_favorite)
    return { "added": True }

def list_favorites():
    favorites_list = favorites.list_favorites()
    return { "favorites": favorites_list }
