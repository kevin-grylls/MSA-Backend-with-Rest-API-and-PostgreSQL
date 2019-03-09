# Simple Backend Example with REST API and PostgreSQL

## Service Description

- This is a simple backend service of MSA Web App.

- It's built with HATEOAS Driven REST APIs and PostgreSQL based on Express.js

- It provides Open API Specification through Swagger

## Scaffold

    - common
    - server
        - config
        - controllers
        - middlewares
        - models
        - routes
    - index.js
    - package.json

## Usage

```js
## development
$ yarn dev

## production
$ yarn prod

## dockerizing
$ docker build -t {Image Name} .
```

## Configuration

- Make sure redis and postgres is installed and running on the same subnet so that service is operating.

- Or you can insert configurations as your enviroment such as development, staging and production.

- Redis and PostgreSQL is dependencies of this service.

```js
## Place where you insert configurations parameters
common/*
server/config/*
```

## Connection

- You could see message like this when service run and connect with your local environment

<img style="-webkit-user-select: none;cursor: zoom-in;" src="https://user-images.githubusercontent.com/21056590/54073002-3c598100-42c5-11e9-9e19-739e25462c26.png" width="788" height="212">

- `http://localhost:8081` for HATEOAS API Description
- `http://localhost:8081/docs` for Swagger

<img width="1463" alt="2019-03-06 7 04 45" src="https://user-images.githubusercontent.com/21056590/53872995-cba33200-4042-11e9-8419-f538fdab6655.png">

## LISENCE

MIT
