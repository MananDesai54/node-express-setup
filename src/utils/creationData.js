module.exports = {
  basicData: () => ({
    files: {
      "src/index.js": "indexJS",
      "package.json": "packageJson",
      ".env": "env",
      "README.md": "readmeMd",
      ".gitignore": "gitignore",
    },
    folders: ["src"],
  }),
  withFolders: () => ({
    files: {
      "src/index.js": "indexJS",
      "package.json": "packageJson",
      ".env": "env",
      "README.md": "readmeMd",
      ".gitignore": "gitignore",
      "src/config/index.js": "configIndexJS",
      "src/models/index.js": "modelsIndexJS",
      "src/routes/index.js": "routesIndexJS",
      "src/utils/index.js": "utilsIndexJS",
    },
    folders: ["src", "src/config", "src/models", "src/routes", "src/utils"],
  }),
};
