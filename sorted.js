const index = require("./index");
const { merge } = require("./src/lib/utils");
const sorted = require("./src/sorting");

module.exports = merge([index, sorted.getPartial({ severity: "warn" })]);
