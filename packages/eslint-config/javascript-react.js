require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'eslint-config-airbnb',
    './shared/javascript.js',
    './shared/react.js',
    './shared/prettier.js',
  ].map(require.resolve),
  env: {
    browser: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
