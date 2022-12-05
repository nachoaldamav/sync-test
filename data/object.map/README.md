# object.map [![NPM version](https://img.shields.io/npm/v/object.map.svg?style=flat)](https://www.npmjs.com/package/object.map) [![NPM monthly downloads](https://img.shields.io/npm/dm/object.map.svg?style=flat)](https://npmjs.org/package/object.map)  [![NPM total downloads](https://img.shields.io/npm/dt/object.map.svg?style=flat)](https://npmjs.org/package/object.map) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/object.map.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/object.map) [![Windows Build Status](https://img.shields.io/appveyor/ci/jonschlinkert/object.map.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/jonschlinkert/object.map)

> Similar to map for arrays, this creates a new object by calling the callback on each property of the original object.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save object.map
```

## Usage

```js
var mapValues = require('object.map');

var result = mapValues({a: 'a', b: 'b'}, function(val, key, obj) {
  return val + val;
});
console.log(result);
//=> {a: 'aa', b: 'bb'}
```

Optionally specify a `thisArg` as the last argument:

```js
var result = mapValues({a: 'b'}, function(val, key, obj) {
  return this.foo;
}, {foo: 'bar'});
console.log(result);
//=> {a: 'bar'}
```

## About

### Related projects

* [arr-map](https://www.npmjs.com/package/arr-map): Faster, node.js focused alternative to JavaScript's native array map. | [homepage](https://github.com/jonschlinkert/arr-map "Faster, node.js focused alternative to JavaScript's native array map.")
* [array-each](https://www.npmjs.com/package/array-each): Loop over each item in an array and call the given function on every element. | [homepage](https://github.com/jonschlinkert/array-each "Loop over each item in an array and call the given function on every element.")
* [collection-map](https://www.npmjs.com/package/collection-map): Returns an array of mapped values from an array or object. | [homepage](https://github.com/jonschlinkert/collection-map "Returns an array of mapped values from an array or object.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 4 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 1 | [phated](https://github.com/phated) |  
| 1 | [doowb](https://github.com/doowb) |  

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on December 20, 2017._