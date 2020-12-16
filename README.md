# hack-api

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hack-api.svg)](https://npmjs.org/package/hack-api)
[![Downloads/week](https://img.shields.io/npm/dw/hack-api.svg)](https://npmjs.org/package/hack-api)
[![License](https://img.shields.io/npm/l/hack-api.svg)](https://github.com/basiclaser/hack-api/blob/master/package.json)

<!-- toc -->
* [hack-api](#hack-api)
* [quickstart](#quickstart)
* [Commands](#commands)
<!-- tocstop -->

# quickstart

<!-- usage -->
```sh-session
$ npm install -g hack-api
$ hack-api COMMAND
running command...
$ hack-api (-v|--version|version)
hack-api/0.0.0 darwin-x64 node-v12.19.0
$ hack-api --help [COMMAND]
USAGE
  $ hack-api COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`hack-api add [FILE]`](#hack-api-add-file)
* [`hack-api help [COMMAND]`](#hack-api-help-command)
* [`hack-api start [FILE]`](#hack-api-start-file)

## `hack-api add [FILE]`

generates an hack-api project

```
USAGE
  $ hack-api add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ hack-api start <PROJECTNAME>
  generates a project folder called <PROJECTNAME>
```

_See code: [src/commands/add.ts](https://github.com/basiclaser/hack-api/blob/v0.0.0/src/commands/add.ts)_

## `hack-api help [COMMAND]`

display help for hack-api

```
USAGE
  $ hack-api help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `hack-api start [FILE]`

generates an hack-api project

```
USAGE
  $ hack-api start [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ hack-api start <PROJECTNAME>
  generates a project folder called <PROJECTNAME>
```

_See code: [src/commands/start.ts](https://github.com/basiclaser/hack-api/blob/v0.0.0/src/commands/start.ts)_
<!-- commandsstop -->

TODO: auth
`hack-api auth`
generates basic auth solution, user models, /register, /login, /logout, /profile routes and controllers

TODO: postgreSQL
TODO: generate from a RAML/YAML file
TODO: loads of other things i'll never do
