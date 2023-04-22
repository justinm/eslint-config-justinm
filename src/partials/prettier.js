/**
 * @typedef {Object} PrettierConfig
 * @property {Severity} severity
 */
/**
 *
 * @param {ConfigPartial} [config={}]
 */
function getPartial(config) {
  const conf = config || {};
  const severity = conf.severity || "error";

  return {
    plugins: ["prettier"],
    extends: ["plugin:prettier/recommended"],
    rules: {
      "prettier/prettier": [
        severity,
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
