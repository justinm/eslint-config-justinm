/**
 * @typedef {Object} ImportConfig
 * @property {Severity} severity
 */
/**
 *
 * @param {ConfigPartial} [config={}]
 */
function getPartial(config) {
  const conf = config || {};
  const severity = conf.severity || "error";

  return {
    extends: ["plugin:import/recommended"],
    rules: {
      "import/no-extraneous-dependencies": [
        severity,
        {
          devDependencies: ["**/__tests__/**", "**/test/**"],
          optionalDependencies: false,
          peerDependencies: true,
        },
      ],
      "import/no-unresolved": severity,
      "import/order": [
        severity,
        {
          groups: ["builtin", "external"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  };
}

module.exports = {
  getPartial,
};
