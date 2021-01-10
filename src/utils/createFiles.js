const { writeFileSync } = require("fs");

module.exports = {
  createFiles: (files, creationPath, language) => {
    for (let file in files) {
      writeFileSync(
        `${creationPath}/${file}`,
        language === "JS"
          ? require("./JSContent")[files[file]]
          : require("./TSContent")[files[file]]
      );
      console.log(`Created.. ${file}`);
    }
  },
};
