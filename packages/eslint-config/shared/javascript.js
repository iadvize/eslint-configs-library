module.exports = {
  extends: ['plugin:eslint-comments/recommended'],
  rules: {
    'no-console': 'error',
    'no-alert': 'error',

    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme', '@todo', '@fixme', 'xxx'],
      },
    ],

    'func-names': 'off',

    'no-unused-vars': 'error',

    camelcase: ['error', { properties: 'always' }],

    'no-empty-function': ['error', { allow: [] }],

    'import/named': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],

    'no-useless-constructor': 'error',

    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
};
