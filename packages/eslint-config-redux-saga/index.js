require('@iadvize-oss/eslint-config/patch');

const TESTS_FILES = [
  '**/*.test.js*',
  'tests/**/*.js*',
  '**/tests/**/*.js*',
  '**/*.spec.js*',
];

module.exports = {
  rules: {
    'redux-saga/no-yield-in-race': 'error',
    'redux-saga/yield-effects': 'error',
  },
  overrides: [
    {
      files: [...TESTS_FILES],
      rules: {
        'redux-saga/no-unhandled-errors': 'off',
      },
    },
  ],
  plugins: ['redux-saga'],
};
