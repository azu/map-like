// LICENSE : MIT
"use strict";
// constants
const NanSymbolMark = {};
function encodeKey(key) {
    const isNotNumber = typeof key === "number" && key !== key;
    return isNotNumber ? NanSymbolMark : key;
}
function decodeKey(encodedKey) {
    return (encodedKey === NanSymbolMark) ? NaN : encodedKey;
}
/*
 ES6 Map like object.
 This is not iterable.
 */
export default class MapLike {
    constructor(entries = []) {
        /**
         * @type {Array}
         * @private
         */
        this._keys = [];
        /**
         *
         * @type {Array}
         * @private
         */
        this._values = [];
        entries.forEach(entry => {
            if (!Array.isArray(entry)) {
                throw new Error("should be `new MapLike([ [key, value] ])`");
            }
            if (entry.length !== 2) {
                throw new Error("should be `new MapLike([ [key, value] ])`");
            }
            this.set(entry[0], entry[1]);
        });
    }

    /**
     * return map size
     * @returns {Number}
     */
    get size() {
        return this._values.filter(value => value !== undefined).length;
    }

    /**
     * entries [[key, value], [key, value]] value
     * @returns {Array}
     */
    entries() {
        return this.keys().map(key => {
            return [decodeKey(this._keys[key]), this._values[key]];
        });
    }

    /**
     * get keys
     * @returns {Array}
     */
    keys() {
        return this._keys.filter(value => value !== undefined).map(decodeKey);
    }

    /**
     * get values
     * @returns {Array}
     */
    values() {
        return this._values;
    }

    /**
     * @param {string} key
     * @returns {*}
     */
    get(key) {
        const idx = this._keys.indexOf(encodeKey(key));
        return (idx !== -1) ? this._values[idx] : undefined;
    }


    /**
     * has value of key
     * @param key
     * @returns {boolean}
     */
    has(key) {
        return (this._keys.indexOf(encodeKey(key)) !== -1);
    }


    /**
     * set value for key
     * @param {*} key
     * @param {*} value
     * @return {MapLike}
     */
    set(key, value) {
        const idx = this._keys.indexOf(encodeKey(key));
        if (idx !== -1) {
            this._values[idx] = value;
        } else {
            this._keys.push(encodeKey(key));
            this._values.push(value);
        }
        return this;
    }

    /**
     * delete value for key
     * @param {string} key
     * @returns {boolean}
     */
    delete(key) {
        const idx = this._keys.indexOf(encodeKey(key));
        if (idx === -1) {
            return false;
        }
        this._keys.splice(idx, 1);
        this._values.splice(idx, 1);
        return true;
    }

    /**
     * clear defined key,value
     * @returns {MapLike}
     */
    clear() {
        this._keys = [];
        this._values = [];
        return this;
    }

    /**
     * forEach map
     * @param {function(value, key, map)} handler
     */
    forEach(handler) {
        this.keys().forEach(key => {
            // value, key, map
            handler(this.get(key), key, this);
        });
    }
}
