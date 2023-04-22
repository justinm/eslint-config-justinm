/**
 * @typedef {Object} BaseConfig
 * @property {number} maxLen
 */
/**
 *
 * @param {ConfigPartial} [config={}]
 */
function getPartial(config) {
  const conf = config || {};
  const maxLen = conf.maxLen || 80;

  return {
    env: {
      jest: true,
      node: true,
      es6: true,
    },
    rules: {
      "max-len": [
        "error",
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
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],
      "key-spacing": ["error"],
      "comma-dangle": ["error", "only-multiline"],
      "comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "no-multi-spaces": [
        "error",
        {
          ignoreEOLComments: false,
        },
      ],
      "array-bracket-spacing": ["error", "never"],
      "array-bracket-newline": ["error", "consistent"],
      "object-curly-spacing": ["error", "always"],
      "object-curly-newline": [
        "error",
        {
          multiline: true,
          consistent: true,
        },
      ],
      "object-property-newline": [
        "error",
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      "keyword-spacing": ["error"],
      "no-duplicate-imports": ["error"],
      "brace-style": [
        "error",
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],
      "space-before-blocks": ["error"],
      "curly": ["error", "multi-line", "consistent"],
      "semi": ["error", "always"],
      "no-return-await": ["off"],
      "no-trailing-spaces": ["error"],
      "dot-notation": ["error"],
      "no-bitwise": ["error"],
      "quote-props": ["error", "consistent-as-needed"],
      "no-shadow": ["off"],
      "no-multiple-empty-lines": ["error"],
      "indent": ["off"],
    },
  };
}

module.exports = {
  getPartial,
};
