const color = require("cli-color");
const { createStructure } = require("./createStructure");
const { installNodeModules } = require("./installNodeModules");

module.exports = {
  doTask: ({ files, folders, creationPath, message }) => {
    createStructure(files, folders, creationPath);
    console.log(color.green(message));
    console.log("===================================");
    console.log(color.yellow("Installing dependencies........."));
    installNodeModules(creationPath);
  },
};
