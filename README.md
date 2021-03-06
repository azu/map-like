# map-like [![Actions Status: test](https://github.com/azu/map-like/workflows/test/badge.svg)](https://github.com/azu/map-like/actions?query=workflow%3A"test")

ECMAScript `Map` like class.

It has same API with [Map - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "Map - JavaScript | MDN").

This library is tiny - 1.5kB(gzip).

    ✈ bundle-size map-like
    map-like@1.0.3

    env  bundle   minify   gzip
    --   5.73 kB  3.08 kB  1.5 kB

## Limitation :warning:

- Not support `Symbol.Iterator`
  - This means that `MapLike` object is not iterable. 
- Return `Array` insteadof `Iterator` object.
  - `MapLike#values()`, `MapLike#keys()`, `MapLike#entries()` return a `Array`.
- Not support `toString()`

## Why Map-**like**?

I've created Map-like to avoid `Symbol.iterator`.
Because, the transpiled code of `Iterator` has a run-time cost at the current moment.

- [Faster Collection Iterators | Benedikt Meurer](http://benediktmeurer.de/2017/07/14/faster-collection-iterators/ "Faster Collection Iterators | Benedikt Meurer")

So, `MapLike` does not support `Iterator` object.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install map-like

## Usage

```js
const { MapLike } = require("map-like");
const map = new MapLike(["key", "value"]);
const value = map.get("key");
map.set("newKey", "newValue");
```

## API

### `MapLike`

ES6 Map like object.
See [Map - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "Map - JavaScript | MDN")

#### `size`

return map size

Returns: **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### `entries(): Array`

entries \[[key, value], [key, value]] value

Returns: **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

#### `keys(): Array`

get keys

Returns: **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

#### `values(): Array`

get values

Returns: **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

#### `get(key: Any): Any`

**Parameters**

- `key`: **Any** - The key of the element to return from the Map object.

Returns: **Any**

#### `has(key: Any): boolean`

has value of key

**Parameters**

- `key`: **Any** - The key of the element to return from the Map object.

Returns: **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### `set(key: Any, value: Any): MapLike`

set value for key

**Parameters**

- `key`: **Any** - The key of the element to return from the Map object.
- `value`: **Any**

Returns: **MapLike**

#### `delete(key: Any): boolean`

delete value for key

**Parameters**

- `key`: **Any** - The key of the element to return from the Map object.

Returns: **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### `clear(): MapLike`

clear defined key,value

Returns: **MapLike**

#### `forEach(handler: function (value, key, map), thisArg: [Any])`

forEach map

**Parameters**

- `handler`: **function (value, key, [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map))**
- `thisArg`: **\[Any]**

## Changelog

See [Releases page](https://github.com/azu/map-like/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.
For bugs and feature requests, [please create an issue](https://github.com/azu/map-like/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](http://twitter.com/azu_re)

## License

MIT © azu

## Thanks

Test `MapLike` with test-case of <https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/Map/tests.js>.
