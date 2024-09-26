# 👮 Auth App

## Table of Contents

- [👮 Auth App](#-auth-app)
  - [Table of Contents](#table-of-contents)
  - [About ](#about-)
  - [Getting Started ](#getting-started-)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [Usage ](#usage-)

## About <a name = "about"></a>

The aim of this project is to showcase my skills in developing React and Rails applications. 🤓

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

⚠️ Before `building` the auth_api project, you need to make some changes directly to the project. See the auth_api README.

### Prerequisites

What things you need to run the project.

- Docker
- docker-compose

The technologies involved in this project.

- Docker (26.0.0)
- docker-compose (2.26.1)
- NodeJS (Latest)
- React (18.3.1)

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone this repository

```bash
git clone git@github.com:gabrielmbarboza/auth-test.git
```

Cloning the API repository

```bash
git submodule init
```

Building the project

```bash
docker compose build
```

Running the Bundler

```bash
docker compose run --rm auth_api bundle install
```

Preparing to use the API

```bash
docker compose run --rm auth_api bin/rails db:create
```

Migrating the Auth API database

```bash
docker compose run --rm auth_api bin/rails db:setup
```

## Usage <a name = "usage"></a>

Using Docker and docker-compose, just run the following command.

```bash
docker compose up
```

and access the following url in your broswer.

```bash
http://0.0.0.0:3001
```