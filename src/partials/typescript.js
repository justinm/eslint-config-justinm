/**
 * @typedef TypescriptConfig
 * @param {number} config.ecmaVersion
 * @param {string[]} config.extensions Defaults to [".ts"]
 * @param {string} config.sourceType Defaults to "module"
 * @param {boolean} config.alwaysTryTypes Defaults to "true"
 */
/**
 *
 * @param {TypescriptConfig} config
 * @returns {ConfigPartial}
 */
export function getPartial(config) {
  const conf = config || {};

  return {
    extends: ["plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: conf.ecmaVersion || 2020,
      sourceType: conf.sourceType || "module",
    },
    plugins: ["@typescript-eslint"],
    ignorePatterns: ["node_modules"],
    rules: {
      "@typescript-eslint/member-delimiter-style": ["error"],
      "@typescript-eslint/no-require-imports": ["error"],
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-floating-promises": ["error"],
      "@typescript-eslint/return-await": ["error"],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: [
            "public-static-field",
            "public-static-method",
            "protected-static-field",
            "protected-static-method",
            "private-static-field",
            "private-static-method",
            "field",
            "constructor",
            "method",
          ],
        },
      ],
    },
  };
}

module.exports = {
  getPartial,
};
