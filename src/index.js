const base = require("./partials/base");
const importPlugin = require("./partials/import");
const prettier = require("./partials/prettier");
const { merge } = require("./utils");

module.exports = merge([
  base.getPartial(),
  importPlugin.getPartial(),
  prettier.getPartial(),
]);
