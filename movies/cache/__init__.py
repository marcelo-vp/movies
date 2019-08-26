import redis


class Cache:
    def __init__(self):
        if not hasattr(self, 'client'):
            self.client = redis.Redis()

    def set_value(self, key, value):
        self.client.set(key, value)

    def get_value(self, key):
        return self.client.get(key)
