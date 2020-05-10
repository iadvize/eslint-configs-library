/* eslint-disable no-underscore-dangle */

// This is a workaround for https://github.com/eslint/eslint/issues/3458
// @see https://github.com/eslint/eslint/issues/3458#issuecomment-516716165
const ModuleResolver = require('eslint/lib/shared/relative-module-resolver');
const {
  ConfigArrayFactory,
} = require('eslint/lib/cli-engine/config-array-factory');

const originalLoadPlugin = ConfigArrayFactory.prototype._loadPlugin;
ConfigArrayFactory.prototype._loadPlugin = function (_name, ctx) {
  const originalResolve = ModuleResolver.resolve;
  try {
    // Resolve using current config filePath instead of `relativeToPath`
    ModuleResolver.resolve = function (moduleName) {
      return originalResolve.call(this, moduleName, ctx.filePath);
    };
    // eslint-disable-next-line prefer-rest-params
    return originalLoadPlugin.apply(this, arguments);
  } finally {
    ModuleResolver.resolve = originalResolve;
  }
};
