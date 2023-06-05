/**
 * @typedef {Object} PrettierConfig
 * @property {Severity?} severity
 */
/**
 *
 * @param {PrettierConfig?} [config={}]
 * @return ConfigPartial
 */
function getPartial(config) {
  const conf = config || {};
  const severity = conf.severity || "error";

  return {
    extends: ["plugin:prettier/recommended", "prettier"],
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
