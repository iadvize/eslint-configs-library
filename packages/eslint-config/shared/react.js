module.exports = {
  extends: ['airbnb/hooks', 'prettier'],
  rules: {
    'react/no-danger': 'error',
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
      },
    ],
    'react/function-component-definition': 'off',
    'react/prop-types': [
      'error',
      {
        ignore: ['children', 'className'],
      },
    ],
    'react/static-property-placement': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
