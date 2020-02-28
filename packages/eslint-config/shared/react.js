module.exports = {
  extends: ['airbnb/hooks', 'prettier/react'],
  rules: {
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
