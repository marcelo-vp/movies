[![CircleCI](https://circleci.com/gh/marcelo-vp/movies/tree/master.svg?style=svg)](https://circleci.com/gh/marcelo-vp/movies/tree/master)

## 1. Introduction
The **Movies App** provides an easy way to search for movies and add them to your favorites list.

## 2. Setting up the environment
### 2.1 Providing a database service
Since this application requires a MongoDB instance, you should provide one according to your operational system.
### 2.2 Creating a virtualenv
    mkvirtualenv -p python3 movies
### 2.3 Installing both Python and Node dependencies
    make dependencies

## 3. Running the app
### 3.1 Development
Development mode requires two separate processes, one for the backend server in Flask and
another for the frontend server, which is a Webpack development tool.

*Starts backend server:*

    make run mode=development

*Starts frontend server:*

    make run-front
### 3.2 Production
*Creates the JS bundle:*

    make build

*Starts the application:*

    make run mode=production

### ∞ To Do
- On Circle CI config, cache frontend build