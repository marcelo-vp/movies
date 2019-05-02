import re, requests
from learning_python.helpers.constants import OMDB_BASE_URL
from learning_python.settings import OMDB_API_KEY


def get_response_as_boolean(data):
    response_as_boolean = True
    response_as_string = data['Response']
    if response_as_string == 'False':
        response_as_boolean = False
    return response_as_boolean


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

    # Tries to get a response within the timeout value
    # and with status code == 200
    try:
        response = requests.get(omdb_base_url, params=params, timeout=3.00)
        if not response.status_code == 200:
            response.raise_for_status()
    except Exception as error:
        print(error)
        return 'Service unavailable. Try again later.'
    else:
        # Tries to parse the response into JSON format
        # and checks if the "Response" key is not False
        try:
            movie_data = response.json()
            has_response = get_response_as_boolean(movie_data)
            if not has_response:
                raise ValueError('Movie not found!')
        except ValueError as error:
            print(error)
            return 'Movie has invalid data or was not found.'
        else:
            return movie_data
