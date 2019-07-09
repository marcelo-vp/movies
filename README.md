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
### 3.1 Bundling JS modules and other assets
    make build
### 3.2 Running the app
    make run mode={environment}
  where *{environment}* is either **development** or **production**
