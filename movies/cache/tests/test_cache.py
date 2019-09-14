import json, pytest
from movies.cache import Cache


class TestCache:

    @pytest.fixture
    def cache_instances(self):
        instances = []
        for _ in range(10):
            instance = Cache()
            instances.append(instance)
        return instances

    @pytest.fixture
    def key_value(self):
        data = {
            "name": "Web Developer career",
            "start": 2017,
            "status": "in progress",
            "company": "Magalu"
        }
        return {
            'key': 'test_data',
            'value': json.dumps(data)
        }

    @pytest.fixture
    def set_key_value_on_cache(self, cache_instances, key_value):
        cache_instances[0].set_value(
            key_value['key'], key_value['value']
        )

    def test_cache_instances_share_same_redis_client(self, cache_instances):
        for i in range(1, len(cache_instances)):
            assert cache_instances[i].client == cache_instances[i - 1].client

    def test_get_value_on_cache(
        self,
        cache_instances,
        set_key_value_on_cache,
        key_value
    ):
        cached_data = (cache_instances[1].get_value(key_value['key'])).decode('utf-8')
        assert cached_data == key_value['value']
