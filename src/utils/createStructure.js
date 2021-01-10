const { createFiles } = require("./createFiles");
const { createFolders } = require("./createFolders");

module.exports = {
  createStructure: (files, folders, creationPath) => {
    createFolders(folders, creationPath);
    createFiles(files, creationPath);
  },
};
