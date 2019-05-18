from flask import Flask

# Create an app to serve views to the browser:
app = Flask(__name__)

import movies.views
