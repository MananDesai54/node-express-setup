const { mkdirSync } = require("fs");

module.exports = {
  createFolders: (folders, creationPath) => {
    folders.forEach((folder) => {
      mkdirSync(`${creationPath}/${folder}`);
    });
  },
};
