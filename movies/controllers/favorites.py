import json
from movies.services.favorites import add_favorite, list_favorites


class FavoritesController:
    def __init__(self, request):
        self.handlers = {
            'GET': self.list,
            'POST': self.add
        }
        self.handler = self.handlers[request.method]
        self.data = request.data

    def list(self):
        response = list_favorites()
        return json.dumps(response)

    def add(self):
        response = add_favorite(json.loads(self.data))
        return json.dumps(response)

    def handle_favorites(self):
        return self.handler()
