import { Command, flags } from "@oclif/command";
var colors = require("colors/safe");
const { execSync } = require("child_process");
import { writeFileSync, appendFileSync } from "fs";
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
  static description =
    "generates a create-mongo-api project with authentication functionality";

  static examples = [
    `$ create-mongo-api init <PROJECTNAME>
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
    const name = args.projectname || "create-mongo-api-project";

    this.log(
      colors.green.underline(`create-mongo-api making API project called "${name}"`)
    );

    // try {
    //   const uri = await cli.prompt(
    //     colors.green.inverse(
    //       "What do you want the collection for auth to be called? (default is user - maybe you want customer, admin, friend, subject?)"
    //     ),
    //     { default: "user" }
    //   );
    // } catch (error) {}

    try {
      const uri = await cli.prompt(
        colors.green.inverse(
          `What is your mongodb CONNECTION_URI(eg. from https://cloud.mongodb.com/)?
make sure to add your username, password and dbname to the URI.`
        ),
      );
      execSync(
        `npx degit https://github.com/basiclaser/create-mongo-api-templates/auth-init ${name}`,
        (error: Error, stdout: string, stderr: Error) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        }
      );
      writeFileSync(`./${name}/package.json`, pkg(name));
      appendFileSync(`./${name}/.env`, `CONNECTION_URI=${uri}`);
      process.chdir(`./${name}`);
      execSync(
        `npm install express mongoose cors colors express-list-endpoints bcrypt dotenv cookie-parser express-session`,
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
      console.log(colors.green.underline(`create-mongo-api "${name}" setup complete`));
      console.log(colors.green.inverse(`cd ${name}`));
      console.log(colors.green.inverse(`npm run dev`));
    } catch (err) {
      console.log(err);
    }
  }
}
