/**
 * @typedef {Object} StylesConfig
 * @property {number?} maxLen
 * @property {number?} indent
 * @property {Severity?} severity
 */
/**
 *
 * @param {StylesConfig?} config
 * @return ConfigPartial
 */
function getPartial(config) {
  config = config || {};
  const maxLen = config.maxLen || 80;
  const indent = config.indent || 2;
  const severity = config.severity || "error";

  return {
    rules: {
      "array-bracket-spacing": [severity, "never"],
      "array-bracket-newline": [severity, "consistent"],
      "brace-style": [
        severity,
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],
      "comma-dangle": [severity, "only-multiline"],
      "comma-spacing": [
        severity,
        {
          before: false,
          after: true,
        },
      ],
      "curly": [severity, "multi-line", "consistent"],
      "dot-notation": severity,
      "indent": [severity, indent],
      "key-spacing": severity,
      "keyword-spacing": severity,
      "max-len": [
        severity,
        {
          code: maxLen,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "no-multiple-empty-lines": severity,
      "no-multi-spaces": [
        severity,
        {
          ignoreEOLComments: false,
        },
      ],
      "no-trailing-spaces": severity,
      "object-curly-spacing": [severity, "always"],
      "object-curly-newline": [
        severity,
        {
          multiline: true,
          consistent: true,
        },
      ],
      "object-property-newline": [
        severity,
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      "quotes": [
        severity,
        "double",
        {
          avoidEscape: true,
        },
      ],
      "quote-props": [severity, "consistent-as-needed"],
      "semi": [severity, "always"],
      "space-before-blocks": severity,
    },
  };
}

module.exports = {
  getPartial,
};
