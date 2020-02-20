import os
from dotenv import load_dotenv

load_dotenv()

OMDB_API_KEY = os.getenv('OMDB_API_KEY')
REDIS_URL = os.environ.get('REDIS_URL', 'redis://127.0.0.1:6379')
DATABASE = os.environ.get('DATABASE', 'mongo')
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://127.0.0.1:27017/')
