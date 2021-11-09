# make-api

[![oclif](https://img.shields.io/badge/lol-there%20are%20no%20tests-red.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/make-api.svg)](https://npmjs.org/package/make-api)
[![Downloads/week](https://img.shields.io/badge/-i%20have%20no%20idea%20what%20im%20doing-success)](https://npmjs.org/package/make-api)
[![License](https://img.shields.io/npm/l/make-api.svg)](https://github.com/basiclaser/make-api/blob/master/package.json)

<span style="color:red">this is a 2-day old WIP, and may not work for you :) please report bugs on the github. I wasn't expecting any downloads from people other than my students! :D</span>

make-api is a command-line tool that helps you create APIs quickly, with helpful starter code in each route, controller and model. make-api is designed to be beginner friendly, without overly abstract code, so you can see all your routes in the index.js. It also sets up your connection to your mongoDB atlas cluster.

---

## **basic steps**

initialise an api with login & auth routes called "myProject":

`npx make-api auth-init myProject`

OR initialise an api _without_ auth routes called "myProject":

`npx make-api init myProject`

OR initialise an api called "myProject" with a bunch of predefined collections for Product, Review and Category:

`npx make-api init myProject product review category`

go into the new project folder:

`cd myProject`

generate Group, Event, Message models, routes and controllers just like this!

`npx make-api add group event message`

## experimental features coming next

### maybe write some tests

generate a project from YAML

`npx make-api YAML <path-to-file>`

You can even try to generate a whole project based on a dbdiagram.io link!

`npx make-api dbdiagram <url>`
