/**
 * @typedef {Object} ImportConfig
 */
/**
 *
 * @param {ConfigPartial} [config={}]
 */
function getPartial(config) {
  return {
    extends: ["plugin:import/recommended"],
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: ["**/__tests__/**", "**/test/**"],
          optionalDependencies: false,
          peerDependencies: true,
        },
      ],
      "import/no-unresolved": ["error"],
      "import/order": [
        "warn",
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
