// This is a workaround for https://github.com/eslint/eslint/issues/3458
const path = require('path');

const eslintFolder = path.join(path.dirname(require.resolve('eslint')), '..');

const moduleResolverPath = path.join(
  eslintFolder,
  'lib/shared/relative-module-resolver',
);

// eslint-disable-next-line import/no-dynamic-require
const ModuleResolver = require(moduleResolverPath);

ModuleResolver.resolve = function(moduleName) {
  // const p = require(`${moduleName}/package.json`)
  const modulePath = require.resolve(moduleName);

  return modulePath;
};
