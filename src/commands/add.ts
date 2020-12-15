import { Command, flags } from "@oclif/command";
var path = require("path");
var colors = require("colors/safe");
const { execSync, exec } = require("child_process");
import { writeFileSync } from "fs";
var copydir = require("copy-dir");

export default class Add extends Command {
  static description = "generates an api-gen project";

  static examples = [
    `$ api-gen start <PROJECTNAME>
generates a project folder called <PROJECTNAME>
`,
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  async addNewType(name: string) {
    this.log(
      colors.green.underline(
        `🐦 api-gen adding new "${name}" model and controller`
      )
    );
  }

  async run() {
    const { args, flags } = this.parse(Add);
    if (!process.argv[3]) {
      return console.log(
        //   TODO: check for controller & model folders
        // if neither exist,tell users they're maybe not in a api-gen project
        // TODO: 1. add router code to index.js
        // TODO: 2. add router code to <newroute>.js
        // TODO: 3. add controller code
        // TODO: 4. add schema
        // TODO: 5. add new model to models/index.js

        colors.red.underline(
          `🐦 you need to provide a type name eg. Product, Message, Task, Event, User, Group etc.`
        )
      );
    }
    this.addNewType(process.argv[3]);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
