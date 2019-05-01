import re, requests
from learning_python.helpers.constants import OMDB_BASE_URL
from learning_python.settings import OMDB_API_KEY


def get_movie_data(title, **kwargs):
    """ Gets movie data from OMDb

    Required parameters:
        title(str): movie title

    Optional parameters:
        type(str): movie, series, episode
        y(num): year of release
        plot(str): short(default) or full
        r(str): return data - json(default) or xml

    Returns:
        movie_data(dict): movie data in JSON format

    """
    omdb_base_url = OMDB_BASE_URL
    title = re.sub('\\s+', '+', title)
    params = {
        'apikey': OMDB_API_KEY,
        't': title
    }
    for key, value in kwargs.items():
        params[key] = str(value)
    movie_data = requests.get(omdb_base_url, params=params).json()
    try:
        if not eval(movie_data['Response']):
            raise ValueError('Movie not found!')
    except ValueError as error:
        print(error)
        return {'title': 'Not found'}
    else:
        return movie_data
