# api-chunk

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/api-chunk.svg)](https://npmjs.org/package/api-chunk)
[![Downloads/week](https://img.shields.io/npm/dw/api-chunk.svg)](https://npmjs.org/package/api-chunk)
[![License](https://img.shields.io/npm/l/api-chunk.svg)](https://github.com/basiclaser/api-chunk/blob/master/package.json)

<!-- toc -->
* [api-chunk](#api-chunk)
* [quickstart](#quickstart)
* [Commands](#commands)
<!-- tocstop -->

# quickstart

<!-- usage -->
```sh-session
$ npm install -g api-chunk
$ api-chunk COMMAND
running command...
$ api-chunk (-v|--version|version)
api-chunk/1.0.2 darwin-x64 node-v12.19.0
$ api-chunk --help [COMMAND]
USAGE
  $ api-chunk COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`api-chunk add [TYPE]`](#api-chunk-add-type)
* [`api-chunk help [COMMAND]`](#api-chunk-help-command)
* [`api-chunk start [PROJECTNAME]`](#api-chunk-start-projectname)

## `api-chunk add [TYPE]`

generate new routes, controllers and a model by specifying a 'type'

```
USAGE
  $ api-chunk add [TYPE]

DESCRIPTION
  eg. `api-chunk add event`

EXAMPLE
  $ api-chunk add message
  generates a Message model with routes and controllers
```

_See code: [src/commands/add.ts](https://github.com/basiclaser/api-chunk/blob/v1.0.2/src/commands/add.ts)_

## `api-chunk help [COMMAND]`

display help for api-chunk

```
USAGE
  $ api-chunk help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `api-chunk start [PROJECTNAME]`

generates a blank api-chunk project

```
USAGE
  $ api-chunk start [PROJECTNAME]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ api-chunk start <PROJECTNAME>
  generates a project folder called <PROJECTNAME>
```

_See code: [src/commands/start.ts](https://github.com/basiclaser/api-chunk/blob/v1.0.2/src/commands/start.ts)_
<!-- commandsstop -->

TODO: auth
`api-chunk --auth`
generates basic auth solution, user models, /register, /login, /logout, /profile routes and controllers

generate
/register
/login
/logout
/profile

TODO: postgreSQL
TODO: generate from a RAML/YAML file
TODO: loads of other things i'll never do
