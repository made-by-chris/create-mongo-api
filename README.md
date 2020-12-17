# api-make

[![oclif](https://img.shields.io/badge/lol-there%20are%20no%20tests-red.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/api-make.svg)](https://npmjs.org/package/api-make)
[![Downloads/week](https://img.shields.io/badge/-i%20have%20no%20idea%20what%20im%20doing-success)](https://npmjs.org/package/api-make)
[![License](https://img.shields.io/npm/l/api-make.svg)](https://github.com/basiclaser/api-make/blob/master/package.json)

### api-make is a command-line tool that helps you create APIs quickly, with helpful starter code in each route, controller and model. api-make is designed to be beginner friendly, without overly abstract code, so you can see all your routes in the index.js. It also sets up your connection to your mongoDB atlas cluster.

@@@ basic steps @@@

initialise an api with login & auth routes called "myProject":

`npx api-make auth-init myProject`

OR initialise an api _without_ auth routes called "myProject":

`npx api-make init myProject`

OR initialise an api called "myProject" with a bunch of predefined collections for Product,Review and Category:

`npx api-make init myProject product review category`

go into the new project folder:

`cd myProject`

generate Message, Product and Review models, routes and controllers just like this!

`npx api-make add message product review`

## experimental features coming next

### maybe write some tests

generate a project from YAML

`npx api-make YAML <path-to-file>`

You can even try to generate a whole project based on a dbdiagram.io link!

`npx api-make dbdiagram <url>`
