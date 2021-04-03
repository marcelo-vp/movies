import os
from dotenv import load_dotenv

load_dotenv()

# API tokens
OMDB_API_KEY = os.getenv('OMDB_API_KEY')

# Database
DATABASE_URL = os.getenv('DATABASE_URL', default='postgres://marcelopinto@127.0.0.1:5432/movies')

# Cache
REDIS_URL = os.getenv('REDIS_URL', default='redis://127.0.0.1:6379')
