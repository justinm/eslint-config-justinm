const index = require("./index");
const { merge } = require("./src/lib/utils");
const prettier = require("./src/prettier");
const sorting = require("./src/sorting");
const styles = require("./src/styles");

module.exports = merge([
  index,
  prettier.getPartial({ severity: "warn" }),
  sorting.getPartial({ severity: "warn" }),
  styles.getPartial({ severity: "warn" }),
]);
