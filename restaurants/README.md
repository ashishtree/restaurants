## Technology stack used

1- Reactjs
2- Redux
3- Typescript
4- Jest (For unit testing)
5- JSON Server
6- HTML5
7- CSS3
8- SASS

## Run Dummy API Through Json Server

1- Type command (npm install -g json-server) to install json-server
2- Type command (json-server ./db.json) in the project directory
3- open [http://localhost:3000/restaurants](http://localhost:3000/restaurants) to view API on the browser

## View Project on the browser

1- Download the project from 'https://github.com/ashishtree/restaurants/tree/master/restaurants';
2- Type command (npm install) in the project directory
3- Type command (npm start) to view project on the browser
4- open [http://localhost:3006/restaurants](http://localhost:3006/restaurants) to view project on the browser

## Verify Test Cases

1- Type command (npm test) in the project directory
2- You will see something like

Snapshot Summary
› 5 snapshots written from 5 test suites.

Test Suites: 10 passed, 10 total
Tests: 27 passed, 27 total
Snapshots: 5 written, 5 total
Time: 11.298 s
Ran all test suites.

## Notes

1- Implemented filter like "Sort By Availability Status and selected criteria DESC" means all the time Open restaurants will be on the top then Order Ahead
and then Closed.
2- Search Implemented like "name.indexOf(searchCriteria) !== -1" means search criteria should be in the name at any place.
3- If you want to add more sorting options just add that in the "db.json (In real scenario API)" and in sorting values under config in config/index.ts. No need to touch codebase.
4- Implemented Top Rastaurants sorting as well.
