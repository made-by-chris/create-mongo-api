# api-make

[![oclif](https://img.shields.io/badge/lol-there%20are%20no%20tests-red.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/api-make.svg)](https://npmjs.org/package/api-make)
[![Downloads/week](https://img.shields.io/badge/-i%20have%20no%20idea%20what%20im%20doing-success)](https://npmjs.org/package/api-make)
[![License](https://img.shields.io/npm/l/api-make.svg)](https://github.com/basiclaser/api-make/blob/master/package.json)

initialise an api called "myProject":

`npx api-make init myProject`

go into the new project folder:

`cd myProject`

generate Message, Product and Review models, routes and controllers just like this!

`npx api-make add message product review`

## expiremental features coming next

add authentication register, login, logout, profile routes with password hashing and sessions, with a new User model.

`npx api-make auth user`

generate a project from YAML

`npx api-make YAML <path-to-file>`

You can even try to generate a whole project based on a dbdiagram.io link!

`npx api-make dbdiagram <url>`
