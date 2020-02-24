import os
from dotenv import load_dotenv

load_dotenv()

# API tokens
OMDB_API_KEY = os.getenv('OMDB_API_KEY')

# Database
DATABASE = os.getenv('DATABASE', default='mongo')
MONGO_URL = os.getenv('MONGO_URL', default='mongodb://127.0.0.1:27017/')

# Cache
REDIS_URL = os.getenv('REDIS_URL', default='redis://127.0.0.1:6379')
