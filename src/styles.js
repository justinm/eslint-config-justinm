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
      "array-bracket-newline": [severity, "consistent"],
      "array-bracket-spacing": [severity, "never"],
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
          after: true,
          before: false,
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
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        },
      ],
      "no-multi-spaces": [
        severity,
        {
          ignoreEOLComments: false,
        },
      ],
      "no-multiple-empty-lines": severity,
      "no-trailing-spaces": severity,
      "object-curly-newline": [
        severity,
        {
          consistent: true,
          multiline: true,
        },
      ],
      "object-curly-spacing": [severity, "always"],
      "object-property-newline": [
        severity,
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      "quote-props": [severity, "consistent-as-needed"],
      "quotes": [
        severity,
        "double",
        {
          avoidEscape: true,
        },
      ],
      "semi": [severity, "always"],
      "space-before-blocks": severity,
    },
  };
}

module.exports = {
  getPartial,
};
