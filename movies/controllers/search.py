import json
from movies.services.search import search_movie


class SearchController:
    def __init__(self, name):
        self.name = name
        self.plot = 'full'

    def handle_search(self):
        movie_data = search_movie(
            self.name,
            plot=self.plot
        )
        return json.dumps(movie_data)
