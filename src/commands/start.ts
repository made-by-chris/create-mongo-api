import { Command, flags } from "@oclif/command";
var path = require("path");
var colors = require("colors/safe");
const { execSync, exec } = require("child_process");
import { writeFileSync, appendFileSync } from "fs";
var copydir = require("copy-dir");
import cli from "cli-ux";
import createTypes from "../utils/create-types";

const pkg = (name: string) => {
  return `
{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },
  "author": "",
  "license": "ISC"
}`;
};

export default class Start extends Command {
  static description = "generates a blank api-chunk project";

  static examples = [
    `$ api-chunk start <PROJECTNAME>
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

  static args = [
    { name: "projectname" },
    { name: "collection1" },
    { name: "collection2" },
    { name: "collection3" },
    { name: "collection4" },
    { name: "collection5" },
  ];

  async generateProject() {
    const { args } = this.parse(Start);
    const name = args.projectname || "api-chunk-project";

    this.log(
      colors.green.underline(`api-chunk making API project called "${name}"`)
    );
    try {
      execSync(`mkdir ${name}`);
    } catch (error) {
      return console.log(
        `folder already exists or something, try a different project name`
      );
    }
    try {
      const uri = await cli.prompt(
        colors.green.inverse(
          "What is your mongodb CONNECTION_URI? (from atlas website. make sure to add your username, password and dbname.)"
        ),
        { type: "hide" }
      );

      writeFileSync(`./${name}/package.json`, pkg(name));
      copydir.sync("./templates/start", `${name}`);
      appendFileSync(`${name}/.env`, `CONNECTION_URI=${uri}`);
      process.chdir(`./${name}`);

      execSync(
        `npm install express mongoose cors colors express-list-endpoints`,
        (error: Error, stdout: string, stderr: Error) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        }
      );

      execSync(
        `npm install -D nodemon`,
        (error: Error, stdout: string, stderr: Error) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        }
      );
      await createTypes(args);
      console.log(colors.green.underline(`api-chunk "${name}" setup complete`));
      console.log(colors.green.inverse(`cd ${name}`));
      console.log(colors.green.inverse(`npm run dev`));
    } catch (err) {
      console.log(err);
    }
  }

  async run() {
    this.generateProject();
  }
}
