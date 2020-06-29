require('@rushstack/eslint-patch/modern-module-resolution');

const MOCHA_FILES = ['**/*.mocha.js', 'mocha/**/*.js*'];

module.exports = {
  overrides: [
    {
      files: MOCHA_FILES,
      env: {
        mocha: true,
      },
      globals: {
        describe: true,
        expect: true,
        sinon: true,
        assert: true,
        _: true,
        when: true,
        it: true,
        after: true,
        before: true,
        afterEach: true,
        beforeEach: true,
        baseApiUrl: true,
        mount: true,
        shallow: true,
      },
      rules: {
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
