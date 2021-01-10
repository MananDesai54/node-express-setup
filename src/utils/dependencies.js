module.exports = {
  JS: {
    dependencies: "npm install express dotenv body-parser morgan cors helmet",
    devDependencies: "npm install nodemon -D",
  },
  TS: {
    dependencies: "npm install express dotenv body-parser morgan cors helmet",
    devDependencies:
      "npm install nodemon ts-node typescript @types/node @types/express @types/dotenv @types/morgan @types/cors @types/helmet -D",
  },
};
