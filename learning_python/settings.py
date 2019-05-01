import os
from dotenv import load_dotenv

load_dotenv()

OMDB_API_KEY = os.getenv('OMDB_API_KEY')
OMDB_ID = os.getenv('OMDB_ID')
