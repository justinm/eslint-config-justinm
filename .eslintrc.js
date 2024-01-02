const recommended = require("./index");
const { merge } = require("./src/lib/utils");

module.exports = merge([
  {
    env: {
      es6: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
  recommended.default,
]);