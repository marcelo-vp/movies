import json
from movies.cache.search import MovieCache
from movies.services.search import search_movie


class SearchController:
    def __init__(self, name):
        self.name = name
        self.plot = 'full'
        self.cache = MovieCache()

    def handle_search(self):
        movie_data = self.cache.get(self.name)
        if not movie_data:
            movie_data = search_movie(
                self.name,
                plot=self.plot
            )
            if not json.loads(movie_data)['has_error']:
                self.cache.add(self.name, movie_data)
        return movie_data
