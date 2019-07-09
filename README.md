## 1. Introduction

The **Movies App** provides an easy way to search for movies and add them to your favorites list.

## 2. Setting up the environment
### 2.1 Creating a virtualenv
    mkvirtualenv -p python3 movies
### 2.2 Installing both Python and Node dependencies
    make requirements

## 3. Running the app
### 3.1 Building the JS modules bundle
    make build
### 3.2 Running the app
    make run mode={environment}
  where *{environment}* is either **development** or **production**
