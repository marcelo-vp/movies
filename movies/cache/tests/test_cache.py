import json, pytest
from movies.cache import Cache
from movies.constants import DEFAULT_CACHE_MINUTES, MINUTE_IN_SECONDS


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
    def custom_key_value(self, key_value):
        custom_k_v = key_value.copy()
        custom_k_v['key'] = 'custom_test_data'
        return custom_k_v

    @pytest.fixture
    def cache_time(self):
        return MINUTE_IN_SECONDS

    @pytest.fixture
    def set_key_value_on_cache(self, cache_instances, key_value):
        cache_instances[0].set_value(
            key_value['key'], key_value['value']
        )

    @pytest.fixture
    def set_value_with_specific_expire_time(
        self,
        cache_instances,
        cache_time,
        custom_key_value
    ):
        cache_instances[1].set_value(
            custom_key_value['key'],
            custom_key_value['value'],
            cache_time
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

    def test_get_default_expire_time(
        self,
        cache_instances,
        set_key_value_on_cache,
        key_value
    ):
        expire_time = cache_instances[0].get_expire_time(key_value['key'])
        assert expire_time == DEFAULT_CACHE_MINUTES * MINUTE_IN_SECONDS

    def test_get_custom_expire_time(
        self,
        cache_instances,
        cache_time,
        custom_key_value,
        set_value_with_specific_expire_time
    ):
        expire_time = cache_instances[2].get_expire_time(custom_key_value['key'])
        assert expire_time == cache_time
