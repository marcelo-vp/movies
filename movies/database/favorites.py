from movies.database import MoviesDB


class Favorites(MoviesDB):
    def __init__(self):
        super().__init__()
        self.favorites = self.db.favorites

    def add_favorite(self, data):
        self.favorites.insert_one(data)

    def list_favorites(self):
        favorites = []
        for favorite in self.favorites.find():
            del favorite['_id']
            favorites.append(favorite)
        return favorites

    def remove_favorite(self, name):
        self.favorites.delete_one({'Title': name})
