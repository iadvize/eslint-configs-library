const {
  rules: baseBestPracticesRules,
} = require('eslint-config-airbnb-base/rules/best-practices');

module.exports = {
  rules: {
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval':
      baseBestPracticesRules['no-implied-eval'],

    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal':
      baseBestPracticesRules['no-throw-literal'],
  },
};
