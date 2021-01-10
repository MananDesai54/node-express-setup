const { execSync } = require("child_process");
const color = require("cli-color");

module.exports = {
  executeCommand: (command, path) => {
    execSync(command, { cwd: path });
  },
};
