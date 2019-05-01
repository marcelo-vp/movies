import sys
from flask import render_template
from learning_python import app
from learning_python.helpers.expressions import aboutTesla
from learning_python.services.api import get_movie_data

@app.route('/')
def index():
    movie_name = 'blade runner 2049'.replace(' ', '+')
    movie_data = get_movie_data(movie_name)
    return render_template('index.html', intro=intro, movie_data=movie_data)

intro = ['Python running on: %s' % sys.platform]
intro.append(aboutTesla)
intro.append('CEO profile:')
