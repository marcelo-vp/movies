from pymongo import MongoClient
import psycopg2

from movies.settings import DATABASE, DATABASE_URL, MONGO_URL


class MongoDB:
    def __init__(self):
        self.client = MongoClient(MONGO_URL)
        self.db = self.client.movies

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
        self.collection.delete_one({'title': name})


class PostgreDB:
    """Query for creating "favorites" table
    CREATE TABLE favorites (
        id SERIAL PRIMARY KEY,
        title VARCHAR (200) UNIQUE NOT NULL,
        year VARCHAR (10) NOT NULL,
        poster VARCHAR (300) NOT NULL,
        plot VARCHAR NOT NULL
    );
    """

    columns = {
        'favorites': ['title', 'year', 'poster', 'plot']
    }
    insert_favorite = """
        INSERT INTO favorites ({columns})
        VALUES (%(title)s, %(year)s, %(poster)s, %(plot)s);
    """.format(columns=', '.join(columns['favorites']))
    delete_favorite = """
        DELETE FROM favorites WHERE title = %(title)s;
    """
    queries = {
        'insert': {
            'favorites': insert_favorite
        },
        'delete': {
            'favorites': delete_favorite
        }
    }

    def __init__(self):
        self.conn = psycopg2.connect(DATABASE_URL)
        self.db = self.conn.cursor()

    def set_collection(self, collection):
        self.collection = collection

    def add(self, data):
        insert_data = {
            column: data[column]
            for column in self.columns[self.collection]
        }
        self.db.execute(self.queries['insert'][self.collection], insert_data)
        self.conn.commit()

    def list_all(self):
        movies = []
        self.db.execute(f'SELECT * FROM {self.collection};')

        for item in self.db:
            movie = {
                column: item[i + 1]
                for i, column in enumerate(self.columns[self.collection])
            }
            movies.append(movie)

        return movies

    def delete(self, name):
        self.db.execute(
            self.queries['delete'][self.collection],
            {'title': name}
        )
        self.conn.commit()


database_classes = {
    'mongo': MongoDB,
    'postgre': PostgreDB
}


class MoviesDB(database_classes[DATABASE]):
    def __init__(self):
        super().__init__()
