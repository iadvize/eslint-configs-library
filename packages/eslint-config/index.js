require('./patch');

module.exports = {
  plugins: ['prettier', 'eslint-plugin-tsdoc'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:eslint-comments/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.json'],
  },
  env: {
    browser: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json'],
      },
    },
  },
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

    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],

    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    '@typescript-eslint/camelcase': [
      'error',
      { properties: 'always', genericType: 'always' },
    ],
    '@typescript-eslint/no-empty-function': ['error', { allow: [] }],
    '@typescript-eslint/ban-ts-ignore': 'error',

    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: false, // Allow `const { props, state } = this`; false by default
        allowedNames: [], // Allow `const self = this`; `[]` by default
      },
    ],

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

    'react/jsx-filename-extension': 'off',
    'react/no-danger': 'error',
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
      },
    ],
    'react/prop-types': [
      'error',
      {
        ignore: ['children', 'className'],
      },
    ],

    'object-curly-spacing': ['error', 'always'],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    'react/static-property-placement': 'off',

    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',

    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'all',
        singleQuote: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      rules: {
        'react/prop-types': 'off',
        'default-case': 'off',
        'consistent-return': 'off',
        'import/export': 'off',

        'tsdoc/syntax': 'warn',
      },
    },
    {
      files: ['*.json'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
  ],
};
