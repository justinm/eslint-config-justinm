const consts = require("./lib/consts");

/**
 * @typedef {Object} StylesConfig
 * @property {number?} maxLen
 * @property {number?} indent
 * @property {Severity?} warnSeverity
 * @property {Severity?} critSeverity
 */
/**
 *
 * @param {StylesConfig?} config
 * @return ConfigPartial
 */
function getPartial(config) {
  config = config || {};

  const maxLen = config.maxLen || consts.maxLength;
  const indent = config.indent || consts.indent;
  const warnSeverity = config.severity || "warn";
  const critSeverity = config.severity || "error";

  return {
    rules: {
      "array-bracket-newline": [warnSeverity, "consistent"],
      "array-bracket-spacing": [warnSeverity, "never"],
      "brace-style": [
        warnSeverity,
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],
      "comma-dangle": [warnSeverity, "only-multiline"],
      "comma-spacing": [
        warnSeverity,
        {
          after: true,
          before: false,
        },
      ],
      "curly": [warnSeverity, "multi-line", "consistent"],
      "dot-notation": warnSeverity,
      "indent": [warnSeverity, indent],
      "key-spacing": warnSeverity,
      "keyword-spacing": warnSeverity,
      "max-len": [
        warnSeverity,
        {
          code: maxLen,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        },
      ],
      "no-bitwise": critSeverity,
      "no-multi-spaces": [
        warnSeverity,
        {
          ignoreEOLComments: false,
        },
      ],
      "no-duplicate-imports": critSeverity,
      "no-return-await": critSeverity,
      "no-shadow": critSeverity,
      "no-multiple-empty-lines": warnSeverity,
      "no-trailing-spaces": warnSeverity,
      "object-curly-newline": [
        warnSeverity,
        {
          consistent: true,
          multiline: true,
        },
      ],
      "object-curly-spacing": [warnSeverity, "always"],
      "object-property-newline": [
        warnSeverity,
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      "quote-props": [warnSeverity, "consistent-as-needed"],
      "quotes": [
        warnSeverity,
        "double",
        {
          avoidEscape: true,
        },
      ],
      "semi": [warnSeverity, "always"],
      "space-before-blocks": warnSeverity,
    },
  };
}

module.exports = {
  getPartial,
};
