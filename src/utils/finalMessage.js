const color = require("cli-color");
const { executeCommand } = require("./executeCommand");

module.exports = {
  finalMessage: (language, folderName) => {
    if (folderName) {
      console.log();
      console.log(
        color.blue(`
        cd ${folderName}
      `)
      );
    }
    let message;
    if (language === "JS") {
      message = `
        Initialized Git and
        Run: node src/index.js
      `;
    } else {
      message = `
        Initialized Git
        Run: tsc -w
        Run: node dist/index.js
      `;
    }
    console.log();
    executeCommand("git init", folderName ? folderName : ".");
    console.log(color.blue(message));
  },
};
