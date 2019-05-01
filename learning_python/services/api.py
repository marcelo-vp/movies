import requests
from learning_python.settings import OMDB_API_KEY, OMDB_ID

omdb_base_url = 'http://www.omdbapi.com/?i={id}&apikey={key}&t={title}&plot={plot}'


def get_movie_data(title, plot='full'):
    omdb_url = omdb_base_url.format(id=OMDB_ID, key=OMDB_API_KEY, title=title, plot=plot)
    return requests.get(omdb_url).json()
