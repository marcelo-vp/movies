import sys
from flask import render_template
from learning_python import app
from learning_python.services.api import get_movie_data

@app.route('/')
def index():
    movie_name = 'blade runner 2049'
    movie_data = get_movie_data(movie_name, plot='full')
    return render_template('index.html', movie_data=movie_data)
