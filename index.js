const _imports = require("./src/imports");
const { merge } = require("./src/lib/utils");
const _prettier = require("./src/prettier");
const _react = require("./src/react");
const _rules = require("./src/rules");
const _sort = require("./src/sort");
const _typescript = require("./src/typescript");

const recommended = merge([_imports.getPartial(), _rules.getPartial(), _sort.getPartial()]);

module.exports = {
  default: recommended,
  recommended: recommended,
  imports: _imports.getPartial(),
  prettier: _prettier.getPartial(),
  react: _react.getPartial(),
  rules: _rules.getPartial({ severity: "warn" }),
  sorting: _sort.getPartial({ severity: "warn" }),
  typescript: _typescript.getPartial()
};
