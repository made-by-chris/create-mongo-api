import { Command, flags } from "@oclif/command";
var colors = require("colors/safe");
import { readFileSync, writeFileSync } from "fs";
import createTypes from "../utils/create-types";

export default class Add extends Command {
  static description = `generate new routes, controllers and a model by specifying a 'type'
eg. \`create-mongo-api add event\``;

  static examples = [
    `$ create-mongo-api add message
generates a Message model with routes and controllers
`,
  ];

  static args = [
    { name: "collection1" },
    { name: "collection2" },
    { name: "collection3" },
    { name: "collection4" },
    { name: "collection5" },
  ];

  async run() {
    const { args, flags } = this.parse(Add);
    let type = process.argv[3];
    await createTypes(args);
  }
}
