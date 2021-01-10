const { writeFileSync } = require("fs");

module.exports = {
  createFiles: (files, creationPath) => {
    for (let file in files) {
      writeFileSync(
        `${creationPath}/${file}`,
        require("./fileContent")[files[file]]
      );
      console.log(`Created.. ${file}`);
    }
  },
};
