const inquirer = require("inquirer");
const color = require("cli-color");
const { mkdirSync } = require("fs");
const { basicData, withFolders } = require("./utils/creationData");
const { createStructure } = require("./utils/createStructure");
const { installNodeModules } = require("./utils/installNodeModules");
const { doTask } = require("./utils/doTask");

const cwd = process.cwd();
const nameArg = process.argv.slice(2).join();
const foldername = nameArg === "." ? null : nameArg;

async function main() {
  try {
    const { choice } = await inquirer.prompt([
      {
        type: "list",
        message: "Pick the option for setup: ",
        name: "choice",
        choices: ["basic server setup", "server setup with folder structure"],
      },
    ]);
    if (foldername) {
      mkdirSync(`${cwd}/test/${foldername}`);
    }
    const creationPath = foldername
      ? `${cwd}/test/${foldername}`
      : `${cwd}/test`;
    if (choice === "basic server setup") {
      doTask({
        files: basicData().files,
        folders: basicData().folders,
        creationPath,
        message: "All files created successfully.",
      });
    } else if (choice === "server setup with folder structure") {
      createStructure(withFolders().files, withFolders().folders, creationPath);
      console.log(color.green("Structure created"));
      console.log("===================================");
      console.log(color.yellow("Installing dependencies........."));
      installNodeModules(creationPath);
    }
  } catch (error) {
    if (error.isTtyError) {
      console.log(color.red("Can not be rendered in this environment"));
    } else {
      console.log(color.red(error));
    }
  }
}
main();
