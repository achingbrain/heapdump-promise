# heapdump-promise

[![Dependency status][david-image]][david-url] [![Build status][travis-image]][travis-url] [![Coverage status][coveralls-image]][coveralls-url]

Wraps [headpdump](https://libraries.io/npm/heapdump) in a promise compatible API.

## Installation

```
$ npm install --save heapdump-promise
```

## Usage

```javascript
const writeHeapSnapshot = require('heapdump-promise')

writeHeapSnapshot()
  .then((path) => {
    console.info(`A heap dump was written to ${path}`)
  })
  .catch((error) => {
    console.error(`Could not write heap dump because ${error}`)
  })
```

All arguments are passed to `heapdump.writeSnapshot()` as-is:

```javascript
const writeHeapSnapshot = require('heapdump-promise')
const path = '/tmp/my-process.' + Date.now() + '.snapshot'

writeHeapSnapshot(path)
  .then((path) => {
    console.info(`A heap dump was written to ${path}`)
  })
  .catch((error) => {
    console.error(`Could not write heap dump because ${error}`)
  })
```

[david-image]: https://david-dm.org/achingbrain/heapdump-promise.svg?theme=shields.io
[david-url]: https://david-dm.org/achingbrain/heapdump-promise
[travis-image]: https://img.shields.io/travis/achingbrain/heapdump-promise/master.svg
[travis-url]: https://travis-ci.org/achingbrain/heapdump-promise
[coveralls-image]: http://img.shields.io/coveralls/achingbrain/heapdump-promise/master.svg
[coveralls-url]: https://coveralls.io/r/achingbrain/heapdump-promise
