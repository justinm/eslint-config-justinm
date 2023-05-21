const base = require("./src/base");
const importPlugin = require("./src/import");
const { merge } = require("./src/lib/utils");

module.exports = merge([
  base.getPartial({ severity: "error" }),
  importPlugin.getPartial({ severity: "error" }),
]);
