/**
 * @typedef {Object} PrettierConfig
 */
/**
 *
 * @param {ConfigPartial} [config={}]
 */
function getPartial(config) {
  return {
    plugins: ["prettier"],
    extends: ["plugin:prettier/recommended"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          quoteProps: "consistent",
        },
      ],
    },
  };
}

module.exports = {
  getPartial,
};
