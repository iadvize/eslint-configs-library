require('./patch');

module.exports = {
  extends: [
    'eslint-config-airbnb',
    './shared/javascript.js',
    './shared/react.js',
    './shared/typescript.js',
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
      node: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
  },
};
