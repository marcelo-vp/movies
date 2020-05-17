# Movies

[![CircleCI](https://img.shields.io/circleci/build/gh/marcelo-vp/movies)](https://circleci.com/gh/marcelo-vp/movies)&nbsp;
![Python](https://img.shields.io/badge/python-3.7.4-blue)&nbsp;
![Flask](https://img.shields.io/badge/flask-1.0.2-blue)&nbsp;
![React](https://img.shields.io/badge/react-16.8.6-green)

## 1. Introduction
The **Movies** application provides an easy way to search for movies and add them to your favorites list.

## 2. Setting up the environment
### 2.1 Providing the services
This application requires the following services:
- MongoDB or PostgreSQL as database providers
- Redis as cache provider
### 2.2 Creating a virtualenv
    mkvirtualenv -p python3 movies
### 2.3 Installing both Python and Node dependencies
    make dependencies

## 3. Setting environment variables
To choose between MongoDB or PostgreSQL as the app's database, set the `DATABASE` environment variable to either `mongo` or `postgre`. The former is the default setting.

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

### ∞ To Do
- Create favorites model with schema for PostgreSQL database
- Handle exceptions on database with schema
- On Circle CI config, cache frontend build
