# Trynance

[![wakatime](https://wakatime.com/badge/user/99e71179-209a-409a-b8bc-6612891d9ce9/project/9c23e643-6e01-4686-9b63-111f09932020.svg)](https://wakatime.com/badge/user/99e71179-209a-409a-b8bc-6612891d9ce9/project/9c23e643-6e01-4686-9b63-111f09932020) <img src="https://img.shields.io/github/languages/code-size/zataara/trynance-frontend"> ![GitHub last commit](https://img.shields.io/github/last-commit/zataara/trynance-frontend) 


Trynance is a crytpocurrency exchange where users can find digital asset price data, trade cryptocurrencies, add coins to a watchlist, and read financial news. All users begin with $1000 USDT. Trynance's goal is to educate users about digital currencies and give them an environment to learn and trade without risking financial loss.


<img src='./src/images/trynance.png'>


## Table of Contents
1. [Deployment](#Deployment)
2. [Technologies Used](#TechnologiesUsed)
    * [Frontend](#FrontEnd)
    * [Backend](#BackEnd)
    * [Database](#Database)
    * [APIs](#APIs)
2. [Backend](#Backend)
3. [Deployment](#Deployment)
4. [Video Demo](#VideoDemo)
5. [Demo Acount for Site Use](#DemoAccountForSiteUse)
6. [Features](#Features)
7. [Local Deployment](#LocalDeployment)
8. [Testing](#Testing)

## <a name='Deployemnt'></a>Deployment
https://trynance.herokuapp.com

## <a name='TechnologiesUsed'></a>Technologies Used
<a name='FrontEnd'></a><b>Front-End:</b> React, Tailwind

<a name='BackEnd'></a><b>Back-End:</b> Node.js, Express.js, bcrypt

<a name='Database'></a><b>Database:</b> PostgreSQL

<a name='APIs'></a><b>APIs:</b> Coin Data - <a href='https://www.coingecko.com/en/api/documentation'>Coin Gecko</a>, Crypto News - <a href='https://cryptopanic.com/developers/api/'>Cryptopanic</a>


## <a name='Backend'></a> Backend
<a href='https://github.com/zataara/trynance-backend'>Backend Repository</a>


## <a name='VideoDemo'></a>Video Demo

https://user-images.githubusercontent.com/75229911/150287393-90645fae-e7f0-4a5e-85f3-ec1dca686592.mp4


## <a name='DemoAccountForSiteUse'></a>Demo Acount for Site Use

Trynance uses User Registration and Login to save a users data. If you do not wish to create your own account you may use the test account below:

<b>Username:</b> testuser1

<b>Password:</b> testuser1

## <a name='Features'></a>Features
- User Registration and Login
- Real-Time, Live-Refreshing of Coin Data
- Save favorite coins to a watchlist
- Use fiat to trade any coin
- Browse crypto news

## <a name='LocalDeployment'></a>Local Deployment
##### Backend and DB:
Download and install the latest version of postgres <a href='https://www.postgresql.org/download/'>here</a>.

Create both a production and testing database:

```sh
createdb trynance
createdb trynance-test
```

Clone the backend repo:

```sh
git clone https://github.com/zataara/trynance-backend.git
```


Change to root directory:

```sh
cd trynance-backend
```

Install packages:

```sh
npm install
```

Change to sql directory:

```sh
cd sql
```

Open postrgres, set db schema and seed both dbs:

```sh
psql \i trynance.sql
```

Move back a directory:

```sh
cd ..
```

Start backend server:

```sh
npm start
```

##### Frontend:
Clone the frontend repo:

```sh
git clone https://github.com/zataara/trynance-frontend.git
```

Change to root directory:

```sh
cd trynance-frontend
```

Install packages:

```sh
npm install
```

Start frontend server:

```sh
npm start
```


## <a name='Testing'></a>Testing

To run tests in either repository, in the root directory run:

```sh
npm test
```
