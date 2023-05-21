const base = require("./src/base");
const importPlugin = require("./src/import");
const { merge } = require("./src/lib/utils");
const prettier = require("./src/prettier");

module.exports = merge([
  base.getPartial(),
  importPlugin.getPartial(),
  prettier.getPartial(),
  {
    env: {
      node: true,
      es6: true,
    },
  },
]);
