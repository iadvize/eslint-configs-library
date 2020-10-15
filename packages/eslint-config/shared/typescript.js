const {
  rules: airbnbBestPracticesRules,
} = require('eslint-config-airbnb-base/rules/best-practices');
const {
  rules: airbnbES6Rules,
} = require('eslint-config-airbnb-base/rules/es6');
const {
  rules: airbnbStyleRules,
} = require('eslint-config-airbnb-base/rules/style');
const {
  rules: airbnbVariablesRules,
} = require('eslint-config-airbnb-base/rules/variables');

const { rules: javascriptRules } = require('./javascript');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  rules: {
    // replace with @typescript-eslint

    // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor':
      airbnbStyleRules['no-array-constructor'],

    // Replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members':
      airbnbES6Rules['no-dupe-class-members'],

    // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers':
      airbnbBestPracticesRules['no-magic-numbers'],

    // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
      airbnbBestPracticesRules['no-unused-expressions'],

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': airbnbVariablesRules['no-unused-vars'],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define':
      airbnbVariablesRules['no-use-before-define'],

    // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor':
      airbnbES6Rules['no-useless-constructor'],

    // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function':
      javascriptRules['no-empty-function'],

    // Replace Airbnb 'no-redeclare' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': airbnbBestPracticesRules['no-redeclare'],

    // Replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': airbnbVariablesRules['no-shadow'],

    // do not force setting funciton return type
    '@typescript-eslint/explicit-function-return-type': 'off',

    // report any
    '@typescript-eslint/no-explicit-any': 'error',

    // use type not interface
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // do not use // @ts-* comments
    '@typescript-eslint/ban-ts-comment': 'error',

    // do not use this too much
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: false, // Allow `const { props, state } = this`; false by default
        allowedNames: [], // Allow `const self = this`; `[]` by default
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // allows var thing = require('./thing') instead of es import
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      rules: {
        // use types for that
        'default-case': 'off',
        'consistent-return': 'off',
        'no-undef': 'off',

        // handled by tsx already
        'import/export': 'off',

        'tsdoc/syntax': 'error',
      },
    },
    {
      files: ['*.json'],
      rules: {
        // JSON files content would be reported as not used without that
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
  ],
};
