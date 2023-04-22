const importPlugin = require("./import");
const typescript = require("./typescript");
const { merge } = require("../utils");

/**
 * @typedef {Object & TypescriptConfig & ImportConfig} TypescriptImportConfigBase
 * @param {boolean} config.alwaysTryTypes Defaults to "true"
 * @param {string[]} config.tsExtensions Defaults to [".ts"]
 */

/**
 *
 * @param {TypescriptImportConfigBase} [config={}] config
 * @returns {ConfigPartial}
 */
export function getPartial(config) {
  const conf = config || {};
  const extensions = conf.tsExtensions || [".ts"];

  return merge([
    importPlugin.getPartial(),
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
