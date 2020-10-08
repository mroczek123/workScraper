# WorkScraper (name to change)
System created to aggregate job offers across many job sites, created because of difficulties with finding job in COVID-19 era. <br>
System currently consists from few main building blocks:
* backend module (nest.js) which shares REST API to fetch normalized job offers from supported sites
* frontend module (express.js/react) which provides SPA app to interact with backend
* scraping module (TypeScript) which regularly snapshots job offers to analytical purposes

## Current features:
* Display normalized job offers from currently supported sites
### Currently supported sites:
#### Polish sites:
* justjoin.it
* jobsforgeek.com
* nofluffjobs.com
#### Global sites:
* TODO

## Tech stack:
FULLY JS
* Typescript
* Webpack
* Node.js
* Nest.js
* React

### Why such stack?
Decision to make project fully JS was taken due to some advantages which using one language across whole project allows like:
* sharing classes/enums/interfaces between modules gives some sort of contract between modules
* compromise between static and dynamic language given by TS
* easy asynchronicity featured by Promises and RxJS 🦄

## ROADMAP:
### 1. Add support for next sites:
#### Global sites:
* linked.in (needs research)
* glassdoor.com (needs research)
#### Polish sites:
* pracuj.pl (has some api, needs rev eng)
### 2. Add analytics feature to make easier for programmers see global/local trends.

