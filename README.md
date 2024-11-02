<h1 align="center">Encuentra mi bicicleta</h1>
<p>Encuentra mi bicicleta is a REST API that helps users locate the nearest MiBici bike rental stations within the metropolitan area of Guadalajara. Using open data from MiBici, the API allows users to search for nearby stations by providing latitude, longitude, and a distance radius.</p>

## Table of Contents

* [Installing](#installing)
* [Development](#development)
* [Building](#building)
* [Linting](#linting)

## Installing

```bash
nvm install 18.0.0
nvm use 18
npm install
```

## Run migrations and seeders

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## Run development mode

```bash
npm run start:dev
```

## Building for production

```bash
npm run build
```

## Run production mode

```bash
npm run start
```

## Run tests

```bash
npm run test
```

## Test app

```bash
curl --location 'https://encuentra-mi-bici-c85b66bd6929.herokuapp.com/api/bikeStations?latitude=20.63877110592591&longitude=-103.41001728903304&distance=2'
```

## API Docs

```bash
curl --location 'https://encuentra-mi-bici-c85b66bd6929.herokuapp.com/api/bikeStations?latitude=20.63877110592591&longitude=-103.41001728903304&distance=2'
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```
