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


## Special eslint patch

The lib also provide a workaround for https://github.com/eslint/eslint/issues/3458

In your config javascript, entry point. Start by requiring the patch:
```js
require('@iadvize-oss/eslint-config/patch');

module.exports = {
  extends: [
    'airbnb-typescript',
    ...
```
