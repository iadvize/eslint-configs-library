require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'eslint-config-airbnb',
    './shared/javascript.js',
    './shared/react.js',
    './shared/typescript.js',
    './shared/typescript-react.js',
    './shared/prettier.js',
  ].map(require.resolve),
  env: {
    browser: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {}, // eslint-import-resolver-typescript config
      node: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
