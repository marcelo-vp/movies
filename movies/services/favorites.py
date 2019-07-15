from movies.database import MoviesDB

movies_db = MoviesDB()

def add_favorite(movie_data):
    new_favorite = {
        'title': movie_data["title"],
        'image': movie_data["image"],
        'plot': movie_data["plot"]
    }
    movies_db.add_favorite(new_favorite)
    return { "added": True }

def list_favorites():
    favorites = movies_db.list_favorites()
    return { "favorites": favorites }
