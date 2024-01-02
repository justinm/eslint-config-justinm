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
    "@justinm/eslint-config/prettier",
    "@justinm/eslint-config/recommended",
    "@justinm/eslint-config/rules",
    
    // For React projects
    "@justinm/eslint-config/react",

    // For typescript projects
    "@justinm/eslint-config/typescript",

    // Add additional styling support
    "@justinm/eslint-config/prettier",
    "@justinm/eslint-config/sort",
  ]
}
```

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