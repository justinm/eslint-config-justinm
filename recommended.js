const index = require("./index");
const { merge } = require("./src/lib/utils");
const styles = require("./src/styles");

module.exports = merge([index, styles.getPartial({ severity: "warn" })]);
