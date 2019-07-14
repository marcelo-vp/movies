import re, requests
from movies.constants import OMDB_BASE_URL
from movies.settings import OMDB_API_KEY


def get_response_as_boolean(data):
    response_as_boolean = True
    response_as_string = data['Response']
    if response_as_string == 'False':
        response_as_boolean = False
    return response_as_boolean


def search_movie(title, **kwargs):
    """
    Searches for movie in OMDb

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
    title = re.sub('\\s+', '+', title)
    params = {
        'apikey': OMDB_API_KEY,
        't': title
    }

    for key, value in kwargs.items():
        params[key] = str(value)

    error_data = { "has_error": True }

    # Tries to get a response within the timeout value
    # and with status code == 200
    try:
        response = requests.get(OMDB_BASE_URL, params=params, timeout=3.00)
        if not response.status_code == 200:
            response.raise_for_status()
    except Exception as error:
        print(error)
        error_data["error"] = "Service unavailable. Try again later."
        return error_data
    else:
        # Tries to parse the response into JSON format
        # and checks if the "Response" key is not False
        try:
            movie_data = response.json()
            has_response = get_response_as_boolean(movie_data)
            if not has_response:
                raise ValueError("Movie not found!")
        except ValueError as error:
            print(error)
            error_data["error"] = str(error)
            return error_data
        else:
            return movie_data
