const color = require("cli-color");
const { createStructure } = require("./createStructure");
const { executeCommand } = require("./executeCommand");
const dependencies = require("./dependencies");

module.exports = {
  doTask: ({ files, folders, creationPath, message, language }) => {
    createStructure({ files, folders, creationPath, language });
    console.log(color.green(message));
    console.log(
      "==================================================================="
    );
    executeCommand("npm init -y", creationPath);
    console.log(color.yellow("Installing Dependencies........."));
    executeCommand(dependencies[language].devDependencies, creationPath);
    executeCommand(dependencies[language].dependencies, creationPath);
    console.log(
      "==================================================================="
    );
    console.log(color.green("Dependencies installed successfully"));
    console.log();
    console.log();
  },
};
