const index = require("./index");
const pretty = require("./pretty");
const { merge } = require("./src/lib/utils");

module.exports = merge([index, pretty]);
