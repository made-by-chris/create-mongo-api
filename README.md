# 🐦 api_gen

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/api_gen.svg)](https://npmjs.org/package/api_gen)
[![Downloads/week](https://img.shields.io/npm/dw/api_gen.svg)](https://npmjs.org/package/api_gen)
[![License](https://img.shields.io/npm/l/api_gen.svg)](https://github.com/basiclaser/api_gen/blob/master/package.json)

<!-- toc -->

Generate Express & Mongo APIs, with easy-to-use example controller & model code.

- Common middlewares are included ( cors, cookieParser, bodyParser, express-session ).
- Relatively simple structure is used (no sub-router files or views included).

---

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g api_gen
$ api_gen COMMAND
running command...
$ api_gen (-v|--version|version)
api_gen/0.0.0 darwin-x64 node-v12.19.0
$ api_gen --help [COMMAND]
USAGE
  $ api_gen COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`api_gen hello [FILE]`](#api_gen-hello-file)
- [`api_gen help [COMMAND]`](#api_gen-help-command)

## `api_gen hello [FILE]`

describe the command here

```
USAGE
  $ api_gen hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ api_gen hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/basiclaser/api_gen/blob/v0.0.0/src/commands/hello.ts)_

## `api_gen help [COMMAND]`

display help for api_gen

```
USAGE
  $ api_gen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

<!-- commandsstop -->

## todo

commands... hmm

api_gen generates quick and dirty [MVC] project files, full of standard ExpressJS and Mongoose CRUD for you to quickly make use of.

`api_gen start <PROJECTNAME>`
eg. `api_gen start myProject`
create a simple boilerplate api with whichever name you specify.

`api_gen add <TYPENAME>`
eg. `api_gen add User`
create a simple boilerplate api with whichever of the MVC components you specify. The controllers & models are stuffed with CRUD.

TODO: auth
`api_gen auth`
generates basic auth solution, user models, /register, /login, /logout, /profile routes and controllers

TODO: postgreSQL
TODO: generate from a RAML/YAML file

TODO: loads of other things i'll never do
