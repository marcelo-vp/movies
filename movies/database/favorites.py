from sqlalchemy import create_engine, select, Column, Integer, String
from sqlalchemy.orm import declarative_base, Session

from movies.settings import DATABASE_URL

connection_URL = DATABASE_URL.replace('postgres:', 'postgresql:')
engine = create_engine(connection_URL)
session = Session(engine)
Base = declarative_base()


class Favorites(Base):
    __tablename__ = 'favorites'

    id = Column(Integer, primary_key=True)
    title = Column(String(200))
    year = Column(String(10))
    poster = Column(String(300))
    plot = Column(String)

    @classmethod
    def add(cls, data):
        movie = cls(**data)
        session.add(movie)
        session.commit()

    @classmethod
    def list_(cls):
        result = session.execute(select(cls).order_by(cls.id))
        return result.scalars().all()

    @classmethod
    def remove(cls, name):
        result = session.execute(select(cls).where(cls.title == name))
        session.delete(result.scalars().first())
        session.commit()

Base.metadata.create_all(engine)
