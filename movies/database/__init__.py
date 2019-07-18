from pymongo import MongoClient


class MoviesDB:
    def __init__(self):
        self.db = self.db_client.movies_app

    @property
    def db_client(self):
        if not hasattr(self, 'client'):
            self.client = MongoClient()
        return self.client
