import os
from dotenv import load_dotenv

load_dotenv()

OMDB_API_KEY = os.getenv('OMDB_API_KEY')
REDIS_URL = os.environ.get('REDIS_URL')
DATABASE = os.environ.get('DATABASE')
MONGO_URL = os.environ.get('MONGO_URL')
