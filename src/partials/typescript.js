/**
 * @typedef TypescriptConfig
 * @param {number} config.ecmaVersion
 * @param {string} config.sourceType Defaults to "module"
 */
/**
 *
 * @param {TypescriptConfig} config
 * @returns {ConfigPartial}
 */
export function getPartial(config) {
  const conf = config || {};
  const severity = conf.severity || "error";

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
      "@typescript-eslint/member-delimiter-style": severity,
      "@typescript-eslint/no-require-imports": severity,
      "@typescript-eslint/no-shadow": severity,
      "@typescript-eslint/no-floating-promises": severity,
      "@typescript-eslint/return-await": severity,
      "@typescript-eslint/member-ordering": [
        severity,
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
