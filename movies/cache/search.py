import json
from movies.cache import Cache


class MovieCache(Cache):
    def add(self, name, data):
        self.set_value(name, data)

    def get(self, name):
        return self.get_value(name)
