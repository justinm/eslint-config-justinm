const pretty = require("./prettier");
const { merge } = require("./src/lib/utils");

module.exports = merge([
  pretty,
  {
    env: {
      es6: true,
      node: true,
    },
  },
]);
