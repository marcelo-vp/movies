import json
from flask import render_template, request
from movies import app
from movies.services.omdb import get_movie_data
from movies.services.favorites import add_favorite, get_favorites

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search/<movie_name>')
def search_movie_data(movie_name):
    movie_data = get_movie_data(movie_name, plot='full')
    return json.dumps(movie_data)

@app.route('/favorites', methods=['POST', 'GET', 'PUT', 'DELETE'])
def handle_favorites():
    if (request.method == 'POST'):
        response = add_favorite(json.loads(request.data))
        return json.dumps(response)
    if (request.method == 'GET'):
        response = get_favorites()
        return json.dumps(response)
