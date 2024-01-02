/**
 * @typedef {Object} TypescriptConfig
 * @property {Severity?} severity
 */
/**
 *
 * @param {TypescriptConfig?} config
 * @return ConfigPartial
 */
function getPartial(config) {
  const severity = config?.severity || "error";

  return {
    plugins: ["@typescript-eslint"],
    extends: [
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    rules: {
      "@typescript-eslint/no-require-imports": severity,
      "@typescript-eslint/no-shadow": severity,
      "@typescript-eslint/no-floating-promises": severity,
      "@typescript-eslint/return-await": severity,
    },
  };
}

module.exports = {
  getPartial,
};