const JEST_FILES = [
  '**/*.test.@(j|t)s?(x)',
  'tests/**/*.@(j|t)s?(x)',
  '**/tests/**/*.@(j|t)s?(x)',
  '**/*.spec.@(j|t)s?(x)',
];

module.exports = {
  plugins: ['jest'],
  overrides: [
    {
      files: JEST_FILES,
      excludedFiles: '*.mocha.*',
      env: {
        jest: true,
      },
      rules: {
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': 'off',

        'jest/no-alias-methods': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/valid-describe': 'off',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/no-truthy-falsy': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-called-with': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/valid-title': 'error',
        'jest/no-conditional-expect': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/require-top-level-describe': 'error',
      },
    },
  ],
};
