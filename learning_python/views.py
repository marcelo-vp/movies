import sys
from flask import render_template
from learning_python import app
from learning_python.helpers.expressions import aboutTesla

@app.route('/')
def index():
    return render_template('index.html', intro=intro)

intro = ['Python running on: %s' % sys.platform]
intro.append(aboutTesla)
intro.append('CEO profile:')
