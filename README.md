# 🐦 gen-api

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gen-api.svg)](https://npmjs.org/package/gen-api)
[![Downloads/week](https://img.shields.io/npm/dw/gen-api.svg)](https://npmjs.org/package/gen-api)
[![License](https://img.shields.io/npm/l/gen-api.svg)](https://github.com/basiclaser/gen-api/blob/master/package.json)

<!-- toc -->

Generate Express & Mongo APIs, with easy-to-use example controller & model code.

- Common middlewares are included ( cors, cookieParser, bodyParser, express-session ).
- Relatively simple structure is used ( no sub-routers or views ).

---

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# quickstart

<!-- usage -->

```sh-session
$ npx gen-api start myProject
🐦 gen-api making API project called "myProject"...

$ cd myProject
$ npx gen-api add message
🐦 gen-api adding new "Message" imports and routes to index.js
🐦 gen-api adding new controllers to controllers/Message.js
🐦 gen-api adding new model to models/Message.js and models/index.js

(you need to add your CONNECTION_URI from mongodb atlas to the .env file now)

$npm run dev
🐦 gen-api API running at http://localhost:4000

$ npx gen-api add user
🐦 gen-api adding new "User" imports and routes to index.js
🐦 gen-api adding new controllers to controllers/User.js
🐦 gen-api adding new model to models/User.js and models/index.js

..that's it!
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`gen-api start [PROJECTNAME]`](#gen-api-start)
- [`gen-api add TYPENAME`](#gen-api-add)
- [`gen-api help [COMMAND]`](#gen-api-help-command)

## `gen-api start [PROJECTNAME]`

creates a new API project in a folder with the name you specify.

```
USAGE
  $ gen-api start <PROJECTNAME>

EXAMPLE
  $ npx gen-api start myProject
🐦 gen-api making API project called "myProject"
```

_See code: [src/commands/start.ts](https://github.com/basiclaser/gen-api/blob/v0.0.0/src/commands/start.ts)_

## `gen-api add <TYPENAME>`

creates new routes, controllers and a model with the name you specify.

```
USAGE
  $ gen-api add <TYPENAME>

EXAMPLE
  $ npx gen-api add product
🐦 gen-api adding new "Product" imports and routes to index.js
🐦 gen-api adding new controllers to controllers/Product.js
🐦 gen-api adding new model to models/Product.js and models/index.js
```

_See code: [src/commands/start.ts](https://github.com/basiclaser/gen-api/blob/v0.0.0/src/commands/add.ts)_

## `gen-api help [COMMAND]`

display help for gen-api

```
USAGE
  $ gen-api help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

<!-- commandsstop -->

TODO: auth
`gen-api auth`
generates basic auth solution, user models, /register, /login, /logout, /profile routes and controllers

TODO: postgreSQL
TODO: generate from a RAML/YAML file

TODO: loads of other things i'll never do
