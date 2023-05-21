/**
 * @typedef {"error"|"warn"|"off"} Severity
 */

/**
 * @typedef {Object} BaseConfig
 * @property {Severity?} severity
 */
/**
 *
 * @param {BaseConfig} [config={}]
 * @return ConfigPartial
 */
function getPartial(config) {
  config = config || {};
  const severity = config.severity || "error";

  return {
    rules: {
      "no-duplicate-imports": severity,
      "no-return-await": [severity],
      "no-bitwise": severity,
      "no-shadow": [severity],
    },
  };
}

module.exports = {
  getPartial,
};
