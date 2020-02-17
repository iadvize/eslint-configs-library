require('@iadvize-oss/eslint-patch');

const STORYBOOK_FILES = [
  '.storybook/**/*.@(j|t)s?(x)',
  '**/*.stories.@(j|t)s?(x)',
];

module.exports = {
  overrides: [
    {
      files: STORYBOOK_FILES,
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
