interface MapLike<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    entries(): [K, V][];
    values(): V[];
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value?: V): this;
    readonly size: number;
}

interface MapLikeConstructor {
    new (): MapLike<any, any>;
    new <K, V>(entries?: [K, V][]): MapLike<K, V>;
    readonly prototype: MapLike<any, any>;
}
export default MapLikeConstructor;