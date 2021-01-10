#!/usr/bin/env node
const inquirer = require("inquirer");
const color = require("cli-color");
const { mkdirSync } = require("fs");
const { basicData, withFolders } = require("./utils/creationData");
const { doTask } = require("./utils/doTask");
const { finalMessage } = require("./utils/finalMessage");

const cwd = process.cwd();
const nameArg = process.argv.slice(2).join();
const foldername = nameArg === "." ? null : nameArg;

async function main() {
  try {
    const { choice, language } = await inquirer.prompt([
      {
        type: "list",
        message: "Pick the option for setup: ",
        name: "choice",
        choices: [
          "basic server setup",
          "server setup with folders( i.e- routers, models )",
        ],
      },
      {
        type: "list",
        message: "Pick the language to setup: ",
        name: "language",
        choices: ["JavaScript", "TypeScript"],
      },
    ]);
    if (foldername) {
      mkdirSync(`${cwd}/${foldername}`);
    }
    const selectedLanguage = language === "JavaScript" ? "JS" : "TS";
    const creationPath = foldername ? `${cwd}/${foldername}` : `${cwd}`;
    if (choice === "basic server setup") {
      const files = basicData().files;
      doTask({
        files: { ...files[selectedLanguage], ...files.common },
        folders: basicData().folders,
        creationPath,
        message: "All files created successfully.",
        language: selectedLanguage,
      });
      finalMessage(selectedLanguage, foldername);
    } else if (choice === "server setup with folders( i.e- routers, models )") {
      const files = withFolders().files;
      doTask({
        files: { ...files[selectedLanguage], ...files.common },
        folders: withFolders().folders,
        creationPath,
        message: "All file created successfully.",
        language: selectedLanguage,
      });
      finalMessage(selectedLanguage, foldername);
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
