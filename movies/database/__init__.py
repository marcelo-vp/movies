from pymongo import MongoClient


class MoviesDB:
    client = None

    def __init__(self):
        self.db = self.get_client().movies_app
        self.favorites = self.db.favorites

    def get_client(self):
        if not self.client:
            self.client = MongoClient()
        return self.client

    def add_favorite(self, data):
        self.favorites.insert_one(data)

    def list_favorites(self):
        favorites = []
        for favorite in self.favorites.find():
            del favorite['_id']
            favorites.append(favorite)
        return favorites
