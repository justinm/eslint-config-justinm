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
  const severity = config.severity || "error";

  return {
    plugins: ["sort-class-members"],
    rules: {
      "sort-class-members/sort-class-members": [
        severity,
        {
          order: [
            "[static-properties]",
            "[static-methods]",
            "[properties]",
            "[conventional-private-properties]",
            "constructor",
            "[methods]",
            "[conventional-private-methods]",
          ],
          accessorPairPositioning: "getThenSet",
        },
      ],
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
        },
      ],
      "sort-keys": [
        "error",
        "asc",
        {
          allowLineSeparatedGroups: true,
          caseSensitive: false,
          minKeys: 2,
          natural: true,
        },
      ],
    },
  };
}

module.exports = {
  getPartial,
};
