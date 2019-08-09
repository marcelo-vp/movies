import json
from movies.services.favorites import add_favorite, list_favorites, remove_favorite


class FavoritesController:
    def __init__(self, request):
        self.handlers = {
            'GET': self.list,
            'POST': self.add,
            'DELETE': self.remove
        }
        self.handler = self.handlers[request.method]
        self.data = request.data
        self.args = request.view_args

    def list(self):
        response = list_favorites()
        return json.dumps(response)

    def add(self):
        response = add_favorite(json.loads(self.data))
        return json.dumps(response)

    def remove(self):
        response = remove_favorite(self.args['name'])
        return json.dumps(response)

    def handle_favorites(self):
        return self.handler()
