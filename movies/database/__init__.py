from pymongo import MongoClient
import psycopg2

from movies.settings import DATABASE, MONGO_URL


class MongoDB():
    def __init__(self):
        client = MongoClient(MONGO_URL)
        self.db = client.movies

    def set_collection(self, collection):
        self.collection = self.db[collection]

    def add(self, data):
        self.collection.insert_one(data)

    def list_all(self):
        records = []
        for record in self.collection.find():
            del record['_id']
            records.append(record)
        return records

    def delete(self, name):
        self.collection.delete_one({'Title': name})


class PostgreDB():
    def __init__(self):
        conn = psycopg2.connect(dbname='movies')
        self.db = conn.cursor()


database_classes = {
    'mongo': MongoDB,
    'postgre': PostgreDB
}


class MoviesDB(database_classes[DATABASE]):
    def __init__(self):
        super().__init__()
