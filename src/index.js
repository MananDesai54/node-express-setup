const inquirer = require("inquirer");
const color = require("cli-color");
const { writeFileSync, mkdirSync } = require("fs");
const { exec } = require("child_process");

const cwd = process.cwd();
const nameArg = process.argv.slice(2).join();
const foldername = nameArg === "." ? null : nameArg;

inquirer
  .prompt([
    {
      type: "list",
      message: "Pick the option for setup: ",
      name: "choice",
      choices: ["basic server setup", "server setup with folder structure"],
    },
  ])
  .then(({ choice }) => {
    let keyword;
    if (foldername) {
      mkdirSync(`${cwd}/test/${foldername}`);
    }
    const creationPath = foldername
      ? `${cwd}/test/${foldername}`
      : `${cwd}/test`;
    if (choice === "basic server setup") {
      keyword = "basic";
      const files = {
        "index.js": "indexJS",
        "package.json": "packageJson",
        ".env": "env",
        "README.md": "readmeMd",
        ".gitignore": "gitignore",
      };
      for (let file in files) {
        writeFileSync(
          `${creationPath}/${file}`,
          require("./fileContent")[files[file]]
        );
        console.log(`Created.. ${file}`);
        process;
      }
      console.log(color.green("All files File created"));
    } else if (choice === "server setup with folder structure") {
      keyword = "with-folders";
      exec("cd test", (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(color.red("Can not be rendered in this environment"));
    } else {
      console.log(color.red(error.message));
    }
  });
