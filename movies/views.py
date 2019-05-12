import json, sys
from flask import render_template, request
from movies import app
from movies.services.api import get_movie_data

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/movie', methods=['GET', 'POST'])
def send_movie_data():
    movie_name = json.loads(request.data)['movie_name']
    movie_data = get_movie_data(movie_name, plot='full')
    return json.dumps(movie_data)
