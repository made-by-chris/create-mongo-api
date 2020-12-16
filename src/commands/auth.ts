import { Command, flags } from "@oclif/command";
var colors = require("colors/safe");
import { readFileSync, writeFileSync } from "fs";

const imports = `const {
  createUser,
  getUser,
  loginUser,
  logoutUser,
} = require("./controllers/user");
`;
const routes = ``;

const model = (type = "user") => `
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var ${type}Schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

${type}Schema.pre("save", function (next) {
  var ${type} = this;
  bcrypt.hash(${type}.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    ${type}.password = hash;
    next();
  });
});

${type}Schema.statics.authenticate = function (email, password, callback) {
  ${type}.findOne({ email: email }).exec(function (err, ${type}) {
    if (err) {
      return callback(err);
    } else if (!${type}) {
      var err = new Error("${type} not found.");
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, ${type}.password, function (err, result) {
      if (err) {
        return callback(err);
      }
      if (result === true) {
        return callback(null, ${type});
      } else {
        return callback();
      }
    });
  });
};

const ${type} = mongoose.model("${type}", ${type}Schema);

module.exports = ${type};
`;
// import controllers to index.js
// add routes to index.js
// make controllers/bla.js
// make models/bla.js
// update models/index.js
// update models/index.js

export default class Auth extends Command {
  static description = `generates basic auth solution, user models, /register, /login, /logout, /profile routes and controllers`;

  static examples = [
    `$ api-make auth customer
generates a Customer model with routes and controllers
`,
  ];

  static args = [{ name: "collectionName" }];

  async run() {
    const { args, flags } = this.parse(Auth);
    let type = process.argv[3];
  }
}

var colors = require("colors/safe");
import { readFileSync, writeFileSync } from "fs";

const imports = (type: string) => {
  return `const {getAll${type}s, get${type}ById, create${type}, update${type}, delete${type}} = require("./controllers/${type}")`;
};
const routes = (type: string) => {
  return `app.route("/${type.toLowerCase() + "s"}")
.get(getAll${type}s)
.post(create${type})
app.route("/${type.toLowerCase() + "s"}/:id")
.get(get${type}ById)
.put(update${type})
.delete(delete${type});\n`;
};
const controllerFile = (type: string) => {
  return `
const { ${type} } = require("../models");

exports.getAll${type}s = async function (req, res) {
const all = await ${type}.find().limit(10);
res.json(all);
};

exports.get${type}ById = async function (req, res) {
const { id } = req.params;
const single = await ${type}.findOne({ id: Number(id) });
if (!single) {
    return res.status(404).send("${type} with this ID does not exist");
}
res.json(single);
};

exports.create${type} = async function (req, res) {
    const new${type} = await ${type}.create(req.body);
    res.json(new${type});
};

exports.update${type} = async (req, res) => {
    const { title, body, img } = req.body;
    const { id } = req.params;
    const result = await ${type}.findByIdAndUpdate(id, req.body, {new:true})
    res.json({ success: true, result });
}

exports.delete${type} = async(req, res) => {
    const { id } = req.params;
    const result = await ${type}.findByIdAndDelete()
    res.sendStatus("204");
};
`;
};
const modelFile = (type: string) => {
  return `const mongoose = require("mongoose");

const ${type}Schema = new mongoose.Schema(
    {
    name: {
        first: String,
        last: String,
    },
    username: String,
    email: String,
    author: String,
    tags: [ String ],
    published: {type: Boolean, default: true},
    quantity: Number,
    price: Number,
    },
    { timestamps: true }
);

const ${type} = mongoose.model("${type}", ${type}Schema);
module.exports = ${type};`;
};
const modelImport = (type: string) => {
  return `const ${type} = require("./${type}")`;
};
const modelExport = (type: string) => {
  return `exports.${type} = ${type};`;
};

const createTypeRecursive = async (remaining: Array<string>) => {
  let type = remaining[0];
  type = type.charAt(0).toUpperCase() + type.slice(1);
  if (!type) {
    return console.log(
      colors.red.underline(
        `you need to provide a type name eg. Product, Message, Task, Event, User, Group etc.`
      )
    );
  }

  console.log(
    colors.green.underline(
      `api-make adding new "${type}" imports and routes to index.js`
    )
  );
  try {
    const sourceIndexFile = readFileSync("./index.js", {
      encoding: "utf8",
      flag: "r",
    });

    let updatedFileAsArray = sourceIndexFile.split("\n");
    let importTargetIndex;
    let routesTargetIndex;

    // inject imports
    const lastImport = sourceIndexFile
      .split("\n")
      .reverse()
      .find((line) => line.includes("require"));

    if (lastImport) {
      importTargetIndex = sourceIndexFile.split("\n").indexOf(lastImport);
      updatedFileAsArray.splice(importTargetIndex, 0, imports(type));
    }

    // inject routes
    routesTargetIndex =
      sourceIndexFile.split("\n").length -
      sourceIndexFile.split("\n").reverse().indexOf("(async () => {");
    updatedFileAsArray.splice(routesTargetIndex, 0, routes(type));
    writeFileSync(`./index.js`, updatedFileAsArray.join("\n"));
  } catch (error) {
    console.log(colors.red.inverse("FAIL"));
    console.log(colors.red.underline("failed to update index.js file"));
  }

  console.log(
    colors.green.underline(
      `api-make adding new controllers to controllers/${type}.js`
    )
  );
  try {
    writeFileSync(`./controllers/${type}.js`, controllerFile(type));
  } catch (error) {
    console.log(colors.red.inverse("FAIL"));
    console.log(
      colors.red.underline("failed to create controllers/${type}.js")
    );
  }

  console.log(
    colors.green.underline(
      `api-make adding new model to models/${type}.js and models/index.js`
    )
  );

  try {
    writeFileSync(`./models/${type}.js`, modelFile(type));
  } catch (error) {
    console.log(colors.red.inverse("FAIL"));
    console.log(colors.red.underline("failed to create models/${type}"));
  }
  try {
    const sourceModelIndexFile = readFileSync("./models/index.js", {
      encoding: "utf8",
      flag: "r",
    });

    let updatedModelIndexFileAsArray = sourceModelIndexFile.split("\n");
    let importModelTargetIndex;

    // inject imports
    const lastImport = sourceModelIndexFile
      .split("\n")
      .reverse()
      .find((line) => line.includes("require"));

    if (lastImport) {
      importModelTargetIndex = sourceModelIndexFile
        .split("\n")
        .indexOf(lastImport);
      updatedModelIndexFileAsArray.splice(
        importModelTargetIndex,
        0,
        modelImport(type)
      );
    }
    updatedModelIndexFileAsArray.push(modelExport(type));
    writeFileSync(`./models/index.js`, updatedModelIndexFileAsArray.join("\n"));
    if (remaining.length > 1) await createTypeRecursive(remaining.slice(1));
  } catch (error) {
    console.log(colors.red.inverse("FAIL"));
    console.log(colors.red.underline("failed to update models/index.js"));
  }
};
