const { merge } = require("./lib/utils");
const typescript = require("./typescript");

/**
 * @typedef {Object & TypescriptConfig & ImportConfig} TypescriptImportConfigBase
 * @param {boolean} config.alwaysTryTypes Defaults to "true"
 * @param {string[]} config.tsExtensions Defaults to [".ts", ".tsx"]
 */

/**
 *
 * @param {TypescriptImportConfigBase} [config={}] config
 * @returns {ConfigPartial}
 */
function getPartial(config) {
  const conf = config || {};
  const extensions = conf.tsExtensions || [".ts", ".tsx"];

  return merge([
    typescript.getPartial(config),
    {
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": extensions,
        },
        "import/resolver": {
          alias: {},
          node: {
            extensions,
          },
          typescript: {
            alwaysTryTypes:
              conf.alwaysTryTypes !== undefined && conf.alwaysTryTypes,
          },
        },
      },
    },
  ]);
}

module.exports = {
  getPartial,
};
