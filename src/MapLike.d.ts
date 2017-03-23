declare class MapLike<K, V> {
    clear(): void;

    delete(key: K): boolean;

    forEach(callbackfn: (value: V, index: K, map: MapLike<K, V>) => void, thisArg?: any): void;

    entries(): [K, V][];

    values(): V[];

    get(key: K): V | undefined;

    has(key: K): boolean;

    set(key: K, value?: V): this;

    readonly size: number;
}

interface MapLikeConstructor {
}
export default MapLike;