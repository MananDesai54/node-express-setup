module.exports = {
  basicData: () => ({
    files: {
      JS: {
        "src/index.js": "indexJS",
      },
      TS: {
        "src/index.ts": "indexTS",
        "tsconfig.json": "tsConfigJson",
      },
      common: {
        ".env": "env",
        "README.md": "readmeMd",
        ".gitignore": "gitignore",
      },
    },
    folders: ["src"],
  }),
  withFolders: () => ({
    files: {
      JS: {
        "src/index.js": "indexJS",
        "src/config/index.js": "configIndexJS",
        "src/models/index.js": "modelsIndexJS",
        "src/routes/index.js": "routesIndexJS",
        "src/utils/index.js": "utilsIndexJS",
      },
      TS: {
        "tsconfig.json": "tsConfigJson",
        "src/index.ts": "indexTS",
        "src/config/index.ts": "configIndexTS",
        "src/models/index.ts": "modelsIndexTS",
        "src/routes/index.ts": "routesIndexTS",
        "src/utils/index.ts": "utilsIndexTS",
      },
      common: {
        ".env": "env",
        "README.md": "readmeMd",
        ".gitignore": "gitignore",
      },
    },
    folders: [
      "src",
      "src/config",
      "src/models",
      "src/routes",
      "src/utils",
      "src/controllers",
    ],
  }),
};
