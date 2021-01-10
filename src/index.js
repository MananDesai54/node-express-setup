const inquirer = require("inquirer");
const color = require("cli-color");
const { writeFileSync, mkdirSync } = require("fs");
const { exec } = require("child_process");
const { basicData, withFolders } = require("./utils/creationData");
const { createStructure } = require("./utils/createStructure");

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
      createStructure(basicData().files, basicData().folders, creationPath);
      console.log(color.green("All files File created"));
    } else if (choice === "server setup with folder structure") {
      createStructure(withFolders().files, withFolders().folders, creationPath);
      console.log(color.green("Structure created"));
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
// exec("cd test", (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });
