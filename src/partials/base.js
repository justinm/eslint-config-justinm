/**
 * @typedef {"error"|"warn"|"off"} Severity
 */

/**
 * @typedef {Object} BaseConfig
 * @property {number} maxLen
 * @property {Severity} severity
 */
/**
 *
 * @param {ConfigPartial} [config={}]
 */
function getPartial(config) {
  const conf = config || {};
  const maxLen = conf.maxLen || 80;
  const severity = conf.severity || "error";

  return {
    rules: {
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
      "quotes": [
        severity,
        "double",
        {
          avoidEscape: true,
        },
      ],
      "key-spacing": severity,
      "comma-dangle": [severity, "only-multiline"],
      "comma-spacing": [
        severity,
        {
          before: false,
          after: true,
        },
      ],
      "no-multi-spaces": [
        severity,
        {
          ignoreEOLComments: false,
        },
      ],
      "array-bracket-spacing": [severity, "never"],
      "array-bracket-newline": [severity, "consistent"],
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
      "keyword-spacing": severity,
      "no-duplicate-imports": severity,
      "brace-style": [
        severity,
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],
      "space-before-blocks": severity,
      "curly": [severity, "multi-line", "consistent"],
      "semi": [severity, "always"],
      "no-return-await": ["off"],
      "no-trailing-spaces": severity,
      "dot-notation": severity,
      "no-bitwise": severity,
      "quote-props": [severity, "consistent-as-needed"],
      "no-shadow": ["off"],
      "no-multiple-empty-lines": severity,
      "indent": ["off"],
    },
  };
}

module.exports = {
  getPartial,
};
