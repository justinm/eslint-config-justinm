/**
 * @typedef {Object} ImportConfig
 * @property {Severity?} severity
 */
/**
 *
 * @param {ImportConfig} [config={}]
 * @return ConfigPartial
 *
 */
function getPartial(config) {
  const conf = config || {};
  const severity = conf.severity || "error";

  return {
    extends: ["react-app", "react-app/jest"],
    plugins: ["react-refresh"],
    rules: {
      "react-refresh/only-export-components": severity,
    },
  };
}

module.exports = {
  getPartial,
};
