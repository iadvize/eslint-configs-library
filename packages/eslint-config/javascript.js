require('./patch');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './shared/javascript.js',
    './shared/prettier.js',
  ].map(require.resolve),
  env: {
    browser: true,
  },
  settings: {
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
  },
};
