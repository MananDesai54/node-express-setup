const color = require("cli-color");

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
        Run: node src/index.js
      `;
    } else {
      message = `
        Run: tsc -w
        Run: node dist/index.js
      `;
    }
    console.log();
    console.log(color.blue(message));
  },
};
