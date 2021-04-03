# Movies

[![CircleCI](https://img.shields.io/circleci/build/gh/marcelo-vp/movies)](https://circleci.com/gh/marcelo-vp/movies)&nbsp;
![Python](https://img.shields.io/badge/python-3.9.2-blue)&nbsp;
![Flask](https://img.shields.io/badge/flask-1.0.2-blue)&nbsp;
![NodeJS](https://img.shields.io/badge/node-12.4.0-green)&nbsp;
![React](https://img.shields.io/badge/react-16.8.6-green)

## 1. Introduction
The **Movies** application provides an easy way to search for movies and add them to your favorites list.

## 2. Setting up the environment
### 2.1 Providing the services
This application requires the following services:
- PostgreSQL as database provider
- Redis as cache provider
### 2.2 Creating a virtualenv
    mkvirtualenv -p python3 movies
### 2.3 Installing both Python and Node dependencies
    make dependencies

## 3. Setting environment variables
**OMDB_API_KEY**: you must ask for a developer API key to OMDB and set this variable with the given value.  
**DATABASE_URL**: PostgreSQL connection address at *postgresql://user:passwrod@host:port/database*  
**REDIS_URL**: Redis connection address at *redis://host:port*

## 4. Running the app
### 4.1 Development
Development mode requires two separate processes, one for the backend server in Flask and
another for the frontend server, which is a Webpack development tool.

*Starts backend server:*

    make run mode=development

*Starts frontend server:*

    make run-front
### 4.2 Production
*Creates the JS bundle:*

    make build

*Starts the application:*

    make run mode=production
