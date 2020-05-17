from movies.database import MoviesDB


class Favorites(MoviesDB):
    def __init__(self):
        if not hasattr(self, 'db'):
            super().__init__()
        self.set_collection('favorites')

    def add_favorite(self, data):
        self.add(data)

    def list_favorites(self):
        return self.list_all()

    def remove_favorite(self, name):
        self.delete(name)
