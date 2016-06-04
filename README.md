# map-like [![Build Status](https://travis-ci.org/azu/map-like.svg?branch=master)](https://travis-ci.org/azu/map-like)

ECMAScript `Map` like class.

It has same API with [Map - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "Map - JavaScript | MDN").

## Limitation :warning:

-   Not support `Symbol.Iterator` - it means `MapLike` is not iterable. 
-   Not support `toString()`

## Install

Install with [npm](https://www.npmjs.com/):

    npm install map-like

## Usage

```js
const MapLike = require("map-like");
const map = new MapLike(["key", "value"]);
const value = map.get("key");
map.set("newKey", "newValue");
```

## API

### `size`

Returns: **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** - 

### `entries(): Array`

Returns: **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** - 

### `keys(): Array`

Returns: **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** - 

### `values(): Array`

Returns: **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** - 

### `get(key: string): Any`

**Parameters**

-   `key`: **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns: **Any** - 

### `has(key): boolean`

**Parameters**

-   `key`

Returns: **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** - 

### `set(key: Any, value: Any): MapLike`

**Parameters**

-   `key`: **Any**
-   `value`: **Any**

Returns: **MapLike** - 

### `delete(key: string): boolean`

**Parameters**

-   `key`: **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns: **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** - 

### `clear(): MapLike`

Returns: **MapLike** - 

### `forEach(handler: function (value, key, map))`

**Parameters**

-   `handler`: **function (value, key, [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map))**

## Changelog

See [Releases page](https://github.com/azu/map-like/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.
For bugs and feature requests, [please create an issue](https://github.com/azu/map-like/issues).

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

-   [github/azu](https://github.com/azu)
-   [twitter/azu_re](http://twitter.com/azu_re)

## License

MIT © azu
