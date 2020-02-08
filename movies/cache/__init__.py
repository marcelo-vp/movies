import os, redis
from movies.constants import DEFAULT_CACHE_MINUTES, MINUTE_IN_SECONDS
from datetime import timedelta


class Cache:
    client = redis.from_url(os.environ.get('REDIS_URL'))

    def set_value(
        self,
        key,
        value,
        seconds=DEFAULT_CACHE_MINUTES * MINUTE_IN_SECONDS
    ):
        self.client.setex(
            key,
            timedelta(seconds=seconds),
            value
        )

    def get_value(self, key):
        return self.client.get(key)

    def get_expire_time(self, key):
        return self.client.ttl(key)
