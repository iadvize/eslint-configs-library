# @iadvize/eslint-config

Opiniated eslint config based on airbnb config and prettier.

## Install

Add this dependency to your repository with its peer-dependencies:

```bash
npm add --save-dev @iadvize-oss/eslint-config eslint typescript
```

## Usage

Create a .eslintrc file in your project root with this content

```json
{
  "extends": [
    "@iadvize-oss/eslint-config"
  ]
}
```

You will need a `tsconfig.json` file at the root of your project for TS lint
rules to work. Because we also lint JSON files, you need to include them like
so:

```json
  "include": [
    "**/*",
    "**/*.json"
  ],
  "exclude": ["node_modules"]
```

You probably want to define one special `.eslint.tsconfig.json` like so

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": true
  },
  "include": [
    "**/*",
    "**/*.json"
  ]
}
```

Then, in you `.eslintrc`

```json
  "parserOptions": {
    "project": "./.eslint.tsconfig.json"
  }
```


## Special eslint patch

The lib also provide a workaround for https://github.com/eslint/eslint/issues/3458

When needed, tart by requiring the patch in your config  entry point.
```js
require('@iadvize-oss/eslint-config/patch');

module.exports = {
  extends: [
    'airbnb-typescript',
    ...
```
