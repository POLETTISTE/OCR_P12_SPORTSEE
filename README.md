![PROJECT_12](https://img.shields.io/badge/PROJECT_12-SPORTSEE-GREEN?labelColor=BLUE&style=flat)

![REACT js](https://img.shields.io/badge/REACT%20js-blue?style=flat-square)

![JAVASCRIPT](https://img.shields.io/badge/JAVASCRIPT-yellow?style=flat-square)

# SportSee - November 2022

Source code of Project 12 - Build an analytics dashboard with React of the OpenClassrooms Application developer - JavaScript React course.

## Prerequisites

- NodeJS (version v12.22.12)
- npm (version 6.14.16)

## Installation

### Installing and launching back-end + frontend

#### Clone the repository of SportSee

git clone git@github.com:POLETTISTE/OCR_P12_SPORTSEE.git

#### Open a new Terminal and change directory

put on 'backend' repository:

npm install

#### Launch back-end on port 3000 (default port) with:

yarn dev

#### Open a new Terminal and change directory

put on 'front-end' repository:

npm install

#### Launch front-end on port 3001 with:

npm start

Would you like to run the app on another port instead? › (Y/n)
=> choose 'yes'

#### Front-end is now rendered at URL http://localhost:3001.

N.B.:
SportSee API only contains data for users with id 12 and 18.

## How to use API or mocked datas ?

go to :'src/hooks/usefetch.js'

### Use API:

on line 17, const DATA_FROM_API must be true
(const DATA_FROM_API = true)

### Use Mocked datas :

on line 17, const DATA_FROM_API must be false
(const DATA_FROM_API = false)

## Authors

- [@POLETTISTE](https://www.github.com/POLETTISTE)
