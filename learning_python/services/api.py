import requests
from learning_python.helpers.constants import OMDB_BASE_URL
from learning_python.settings import OMDB_API_KEY


def get_movie_data(title, plot='full'):
    omdb_base_url = OMDB_BASE_URL
    params = {
        'apikey': OMDB_API_KEY,
        't': title,
        'plot': plot
    }
    movie_data = requests.get(omdb_base_url, params=params)
    return movie_data.json()
