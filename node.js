const index = require("./index");
const { merge } = require("./src/lib/utils");
const node = require("./src/node");

module.exports = merge([index, node.getPartial()]);
