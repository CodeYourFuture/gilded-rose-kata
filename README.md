# The Gilded Rose

Gilded Rose kata in JavaScript with Jest

## Introduction

The Gilded Rose is a _refactoring kata_ created by [Terry Hughes] (originally published [here][refactor-this] in 2011) and popularised by [Emily Bache]. The purpose of the kata is to experience working with a legacy codebase in the face of new requirements. You can watch Emily's video about the kata, [_"Why Developers LOVE The Gilded Rose Kata"_][youtube], on YouTube.

The implementation (`src/gilded_rose.js`) is taken from her [repo] collecting starting point implementations across multiple languages and frameworks, generously released under the MIT license, and the integration test (`__tests__/integration.test.js`) is ported from the [TextTest] suite in the same repository.

## Installation

- Ensure you have Node.js and NPM installed (any currently-supported LTS should be fine; Jest 29 [requires][jest-compat] Node `^14.15 || ^16.10 || >= 18`, the tests require `^14.18 || >=16`)
- [Clone][github-clone] the repo
- Run `npm ci` to install the dependencies (the implementation is pure JS, but the tests require [Jest])
- Run `npm test` to check that it's all working
- Read the [requirements] and set to work!

[emily bache]: https://github.com/emilybache
[github-clone]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
[jest]: https://jestjs.io/
[jest-compat]: https://jestjs.io/docs/upgrading-to-jest29#compatibility
[refactor-this]: https://iamnotmyself.com/refactor-this-the-gilded-rose-kata/
[repo]: https://github.com/emilybache/GildedRose-Refactoring-Kata
[requirements]: ./src/GildedRoseRequirements.md
[terry hughes]: https://github.com/TerryHughes
[texttest]: https://texttest.org/
[youtube]: https://youtu.be/Mt4XpGxigT4
