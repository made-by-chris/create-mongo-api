import { Command, flags } from "@oclif/command";
var colors = require("colors/safe");
const { execSync } = require("child_process");
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

export default class Init extends Command {
  static description = "generates an api-make project";

  static examples = [
    `$ api-make init <PROJECTNAME>
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

  async run() {
    const { args } = this.parse(Init);
    const name = args.projectname || "api-make-project";

    this.log(
      colors.green.underline(`api-make making API project called "${name}"`)
    );
    try {
      const uri = await cli.prompt(
        colors.green.inverse(
          "What is your mongodb CONNECTION_URI? (from atlas website. make sure to add your username, password and dbname.)"
        ),
        { type: "hide" }
      );

      execSync(
        `degit https://github.com/basiclaser/api-make-templates/init ${name}`
      );
      writeFileSync(`./${name}/package.json`, pkg(name));
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
      console.log(colors.green.underline(`api-make "${name}" setup complete`));
      console.log(colors.green.inverse(`cd ${name}`));
      console.log(colors.green.inverse(`npm run dev`));
    } catch (err) {
      console.log(err);
    }
  }
}
