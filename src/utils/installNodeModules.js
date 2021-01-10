const { exec } = require("child_process");
const color = require("cli-color");

module.exports = {
  installNodeModules: (path) => {
    exec("npm install", { cwd: path }, (error, stdout, stderr) => {
      if (error) {
        console.log(color.red(`error: ${error.message}`));
        return;
      }
      if (stderr) {
        console.log(color.yellow(`${stderr}`));
        console.log(color.green(`Installation Completed successfully`));
        return;
      }
      console.log(color.green(`Installation Completed successfully`));
    });
  },
};
