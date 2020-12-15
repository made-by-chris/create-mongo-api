# 🐦 api-gen

make Express & Mongo MVC APIs, with easy-to-use example controller & model code.
common middlewares are included ( cors, cookieParser, bodyParser, express-session )

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/api-gen.svg)](https://npmjs.org/package/api-gen)
[![Downloads/week](https://img.shields.io/npm/dw/api-gen.svg)](https://npmjs.org/package/api-gen)
[![License](https://img.shields.io/npm/l/api-gen.svg)](https://github.com/basiclaser/api-gen/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g api-gen
$ api-gen COMMAND
running command...
$ api-gen (-v|--version|version)
api-gen/0.0.0 darwin-x64 node-v12.19.0
$ api-gen --help [COMMAND]
USAGE
  $ api-gen COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`api-gen hello [FILE]`](#api-gen-hello-file)
- [`api-gen help [COMMAND]`](#api-gen-help-command)

## `api-gen hello [FILE]`

describe the command here

```
USAGE
  $ api-gen hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ api-gen hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/basiclaser/api-gen/blob/v0.0.0/src/commands/hello.ts)_

## `api-gen help [COMMAND]`

display help for api-gen

```
USAGE
  $ api-gen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

<!-- commandsstop -->

## todo

commands... hmm

api-gen generates quick and dirty [MVC] project files, full of standard ExpressJS and Mongoose CRUD for you to quickly make use of.

`api-gen start <PROJECTNAME>`
eg. `api-gen start myProject`
create a simple boilerplate api with whichever name you specify.

`api-gen add <TYPENAME>`
eg. `api-gen add User`
create a simple boilerplate api with whichever of the MVC components you specify. The controllers & models are stuffed with CRUD.
TODO: 1. add router code to index.js
TODO: 2. add router code to <newroute>.js
TODO: 3. add controller code
TODO: 4. add schema
TODO: 5. add new model to models/index.js

`api-gen auth`
generates basic auth solution, user models, /register, /login, /logout, /profile routes and controllers

[![a pigeon](https://pixahive.com/wp-content/uploads/2020/09/A-pigeon-near-a-water-pot-76068-pixahive.jpg)](https://pixahive.com/wp-content/uploads/2020/09/A-pigeon-near-a-water-pot-76068-pixahive.jpg)
