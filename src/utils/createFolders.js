const { mkdirSync, existsSync } = require("fs");

module.exports = {
  createFolders: (folders, creationPath) => {
    folders.forEach((folder) => {
      if (!existsSync(`${creationPath}/${folder}`)) {
        mkdirSync(`${creationPath}/${folder}`);
      }
    });
  },
};
