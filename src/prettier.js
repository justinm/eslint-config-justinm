const { maxLength } = require("./lib/consts");

/**
 * @typedef {Object} ImportConfig
 * @property {Severity?} severity
 */
/**
 *
 * @param {ImportConfig} [config={}]
 * @return ConfigPartial
 *
 */
function getPartial(config) {
  return {
    extends: ["plugin:prettier/recommended", "prettier"],
    rules: {
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "always",
          bracketSpacing: true,
          parser: "typescript",
          printWidth: maxLength,
          semi: true,
          singleQuote: false,
          trailingComma: "es5",
          quoteProps: "consistent",
        },
      ],
      "max-len": "off",
    },
  };
}

module.exports = {
  getPartial,
};
