# 📜⛓ script-chain

[![NPM version][script-chain-npm-image]][script-chain-npm-url]
[![MIT License][license-image]][license-url]
[![fliphub][gitter-badge]][gitter-url]
[![fluents][fluents-image]][fluents-url]
[![Build Status][travis-image]][travis-url]

<!--
[![Dependencies][david-deps-img]][david-deps-url]
-->

[travis-image]: https://travis-ci.org/fluents/script-chain.svg?branch=master
[travis-url]: https://travis-ci.org/fluents/script-chain

[david-deps-img]: https://david-dm.org/fluents/script-chain.svg
[david-deps-url]: https://david-dm.org/fluents/script-chain

[fluents-image]: https://img.shields.io/badge/⛓-fluent-9659F7.svg
[fluents-url]: https://www.npmjs.com/package/flipchain

[script-chain-npm-image]: https://img.shields.io/npm/v/script-chain.svg
[script-chain-npm-url]: https://npmjs.org/package/script-chain
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: https://spdx.org/licenses/MIT
[gitter-badge]: https://img.shields.io/gitter/room/fliphub/pink.svg
[gitter-url]: https://gitter.im/fliphub/Lobby
[flipfam-image]: https://img.shields.io/badge/%F0%9F%8F%97%20%F0%9F%92%A0-flipfam-9659F7.svg
[flipfam-url]: https://www.npmjs.com/package/flipfam

> fluent script building

> build scripts to run that are aware of the context; defining NODE_ENV in the subprocess env, after the npm script, at the beginning of a node or lerna script, whether values should be stringified.


## [📖 documentation](./docs)
## [🔬 tests](./tests)

## 📦 usage
```bash
yarn add script-chain
npm i script-chain --save
```

```js
const {ScriptFlip} = require('script-chain')
```

## 📘 examples

### easy

```js
const scripts = new ScriptFlip()
scripts
  .add()
  .npm('diggy')
  .env('magic')
  .flag('env.zoolala', 'aoao')
  .arg('-e')
```

### monorepo

makes tackling monorepo execution scripts a breeze

```js
const script = new ScriptFlip()
  .add()
  .env('prod')
  .lerna()
  .prefix('inferno')
  .scope('app1,app2,inferno')
  .log('info')
  .concurrency(1)
  .group(2)
  .raw('node')
  .flag('row', '0')
  .bin('tsc')

script.includes('--scope=+(inferno-app1|inferno-app2|inferno)')
```


### running

will run commands in a subprocess

```js
const scripts = new ScriptFlip()
scripts
  .add()
  .npm('diggy')
  .env('magic')
  .flag('env.zoolala', 'aoao')
  .arg('-e')

const results = await scripts.run()
```
