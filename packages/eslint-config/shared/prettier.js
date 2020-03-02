module.exports = {
  plugins: ['prettier'],
  extends: ['prettier', 'plugin:prettier/recommended'],
  rules: {
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
      files: ['*.ts', '*.tsx', '*.d.ts'],
      extends: ['prettier/@typescript-eslint'],
    },
  ],
};
