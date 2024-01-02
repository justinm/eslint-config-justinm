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
  const severity = config.severity || "warn";

  return {
    plugins: ["sort-class-members"],
    rules: {
      "sort-class-members/sort-class-members": [
        severity,
        {
          accessorPairPositioning: "getThenSet",
          order: [
            "[static-properties]",
            "[static-methods]",
            "[properties]",
            "[conventional-private-properties]",
            "constructor",
            "[methods]",
            "[conventional-private-methods]",
          ],
        },
      ],
      "sort-imports": [
        severity,
        {
          ignoreCase: true,
          allowSeparatedGroups: true,
        },
      ],
    },
  };
}

module.exports = {
  getPartial,
};
