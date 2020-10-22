require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'eslint-config-airbnb',
    './shared/javascript.js',
    './shared/react.js',
    './shared/typescript.js',
    './shared/typescript-react.js',
    './shared/typescript-with-types.js',
    './shared/prettier.js',
  ].map(require.resolve),
  env: {
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.json'],
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
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
  },
};
