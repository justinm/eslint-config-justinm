const deepmerge = require("deepmerge");

/**
 * @typedef {Object} ConfigPartial
 * @property {string[]} extends
 * @property {string[]} plugins
 * @property {Object} rules
 */
/**
 *
 * @param {ConfigPartial[]} configs
 * @returns {ConfigPartial}
 */
function merge(configs) {
  return configs.reduce((col, next) => {
    return deepmerge(col, next, {
      arrayMerge: (target, source) => {
        return target.concat(source).reduce((coll, el) => {
          if (!coll.filter((s) => s === el).length) {
            coll.push(el);
          }

          return coll;
        }, []);
      },
    });
  }, {});
}

module.exports = {
  merge,
};
