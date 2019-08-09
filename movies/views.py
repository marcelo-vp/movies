import json
from flask import render_template, request
from movies import app
from movies.controllers.search import SearchController
from movies.controllers.favorites import FavoritesController

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search/<movie_name>')
def handle_movie_search(movie_name):
    controller = SearchController(movie_name)
    return controller.handle_search()

@app.route('/favorites', methods=['POST', 'GET'])
def handle_movie_favorites():
    controller = FavoritesController(request)
    return controller.handle_favorites()

@app.route('/favorites/<name>', methods=['DELETE'])
def handle_remove_favorite(name):
    controller = FavoritesController(request)
    return controller.handle_favorites()
