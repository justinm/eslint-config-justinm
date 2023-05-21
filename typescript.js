const index = require("./index");
const { merge } = require("./src/lib/utils");
const typescript = require("./src/typescript");
const typescriptImport = require("./src/typescript-import");

module.exports = merge([
  index,
  typescript.getPartial({ severity: "error" }),
  typescriptImport.getPartial({ severity: "error" }),
]);
