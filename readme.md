# WorkScraper (name to change)

System created to aggregate job offers across many job sites, created because of difficulties with finding job in COVID-19 era. <br>
System currently consists from few main building blocks:

- backend module (dir: ./src/api-server) which shares REST API to fetch normalized job offers from supported sites
- frontend module (dir: ./src/frontend) which provides SPA app to interact with backend
- scraping module (dir: ./src/scraper) which regularly snapshots job offers to analytical purposes
- packages folder: includes things shared between modules e.g. interface definitions

## Current features:

- Display normalized job offers from currently supported sites

### Currently supported sites:

#### Polish sites:

- justjoin.it
- jobsforgeek.com
- nofluffjobs.com

#### Global sites:

- Currently none (in plans)

## Tech stack:

FULLY JS

- Typescript
- Webpack
- Node.js
- Nest.js
- React

### Why such stack?

Decision to make project fully JS was taken due to some advantages which using one language across whole project allows like:

- sharing classes/enums/interfaces between modules gives some sort of hard contract between modules
- compromise between static and dynamic language given by TS
- easy asynchronicity featured by Promises and RxJS 🦄

## ROADMAP:

### 1. Add support for next sites:

#### Global sites:

- linked.in (needs research)
- glassdoor.com (needs research)

#### Polish sites:

- pracuj.pl (has some api, needs rev eng)

### 2. Add analytics feature to make easier for programmers see global/local trends.

### 3. Well ... tests would be helpful in future :P

## Contribution

### How to build project

1. `npm install -g webpack-cli gulp`
2. `npm install`
3. `gulp build`
4. Go to dist and choose package to run
5. Create .env file with settings
6. `nodenv <nazwa pliku js>`
7. Enjoy
