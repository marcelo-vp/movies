from pymongo import MongoClient

client = MongoClient()

db = client.movies_db
movies = db.movies
