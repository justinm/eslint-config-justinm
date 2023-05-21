const index = require("./index");
const { merge } = require("./src/lib/utils");
const prettier = require("./src/prettier");
const sorting = require("./src/sorting");
const styles = require("./src/styles");

module.exports = merge([
  index,
  prettier.getPartial({ severity: "error" }),
  sorting.getPartial({ severity: "error" }),
  styles.getPartial({ severity: "error" }),
]);
