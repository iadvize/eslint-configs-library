require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './shared/javascript.js',
    './shared/typescript.js',
    './shared/prettier.js',
  ].map(require.resolve),
  env: {
    browser: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },
    'import/extensions': ['.js', '.ts'],
    'import/resolver': {
      typescript: {}, // eslint-import-resolver-typescript config
      node: {
        extensions: ['.js', '.json', '.ts', '.d.ts'],
      },
    },
  },
};
