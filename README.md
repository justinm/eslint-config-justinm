## eslint-config-justinm

An eslint config curated by Justin McCormick, a Systems Architect based near Indianapolis, Indiana.

<div style="text-align: center;">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

</div>

**Table of Contents**

<!-- toc -->

- [Installing](#Installing)
- [Configuring Eslint](#configuring-eslint)
- [Contributors](#contributors)

<!-- tocstop -->


## Installing

```shell
npm install --save-dev eslint-config-justinm

# or using Yarn

yarn add -D eslint-config-justinm
```

## Configuring Eslint

```javascript
module.exports = {
  extends: [
    "@justinm/eslint-config/pretty",
    "@justinm/eslint-config/pretty-strict",
    "@justinm/eslint-config/recommended",
    "@justinm/eslint-config/strict",
    "@justinm/eslint-config/typescript",
  ]
}
```

## Contributors

[![Contributors][contributors-avatars]][contributors-url]

[contributors-avatars]: https://contrib.rocks/image?repo=justinm/eslint-config-justinm
[contributors-shield]: https://img.shields.io/github/contributors/justinm/eslint-config-justinm.svg?style=for-the-badge
[contributors-url]: https://github.com/justinm/eslint-config-justinm/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/justinm/eslint-config-justinm.svg?style=for-the-badge
[forks-url]: https://github.com/justinm/eslint-config-justinm/network/members
[stars-shield]: https://img.shields.io/github/stars/justinm/eslint-config-justinm.svg?style=for-the-badge
[stars-url]: https://github.com/justinm/eslint-config-justinm/stargazers
[issues-shield]: https://img.shields.io/github/issues/justinm/eslint-config-justinm.svg?style=for-the-badge
[issues-url]: https://github.com/justinm/eslint-config-justinm/issues
[license-shield]: https://img.shields.io/github/license/justinm/eslint-config-justinm.svg?style=for-the-badge
[license-url]: https://github.com/justinm/eslint-config-justinm/blob/master/LICENSE.md