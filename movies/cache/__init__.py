import redis


class Cache:
    client = redis.Redis()

    def set_value(self, key, value):
        self.client.set(key, value)

    def get_value(self, key):
        return self.client.get(key)
