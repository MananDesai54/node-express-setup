const { writeFileSync } = require("fs");

module.exports = {
  createFiles: (files, creationPath) => {
    for (let file in files) {
      let path = creationPath;
      if (file === "index.js") {
        path = creationPath + "/src";
      }
      writeFileSync(`${path}/${file}`, require("./fileContent")[files[file]]);
      console.log(`Created.. ${file}`);
    }
  },
};
