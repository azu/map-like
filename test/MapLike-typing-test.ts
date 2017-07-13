// MIT © 2017 azu
"use strict";
import { MapLike } from "../src/MapLike";

const map = new MapLike<number, string>();
map.set(1, "1");
map.get(1);
map.has(1);
map.forEach((v) => {
    console.log(v);
});
map.delete(1);
map.clear();