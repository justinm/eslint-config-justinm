const recommended = require("./recommended");
const { merge } = require("./src/lib/utils");
const prettier = require("./src/prettier");

module.exports = merge([
  recommended,
  prettier.getPartial({ severity: "warn" }),
]);
