// require('./patch');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './shared/javascript.js',
    './shared/typescript.js',
    './shared/typescript-with-types.js',
    './shared/prettier.js',
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.json'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },
    'import/extensions': ['.js', '.ts'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.d.ts'],
      },
    },
  },
};
