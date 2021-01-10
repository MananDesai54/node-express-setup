module.exports = {
  basicData: () => ({
    files: {
      "index.js": "indexJS",
      "package.json": "packageJson",
      ".env": "env",
      "README.md": "readmeMd",
      ".gitignore": "gitignore",
    },
    folders: ["src"],
  }),
  withFolders: () => ({
    files: {},
    folders: ["src", "src/config", "src/models", "src/routes", "src/utils"],
  }),
};
