# @iadvize/eslint-patch

This is a workaround for https://github.com/eslint/eslint/issues/3458

## Install

Add this dependency to your eslint config

```bash
npm add --dev @iadvize-oss/eslint-patch
```

## Usage

In your config javascript, entry point. Start by requiring the path

```js
require('@iadvize-oss/eslint-patch');

module.exports = {
  extends: [
    'airbnb-typescript',
    ...
```
