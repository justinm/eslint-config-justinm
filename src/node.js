/**
 * @typedef {"error"|"warn"|"off"} Severity
 */

/**
 *
 * @return ConfigPartial
 */
function getPartial() {
  return {
    extends: ["plugin:node/recommended"],
  };
}

module.exports = {
  getPartial,
};
