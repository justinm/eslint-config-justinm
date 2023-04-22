const base = require("./src/partials/base");
const importPlugin = require("./src/partials/import");
const prettier = require("./src/partials/prettier");
const { merge } = require("./src/utils");

module.exports = merge([
  base.getPartial(),
  importPlugin.getPartial(),
  prettier.getPartial(),
]);
