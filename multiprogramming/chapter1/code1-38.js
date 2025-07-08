import forEach from "./ex1-36.js";

function* map(f, iterable) {
    const iterator = iterable[Symbol.iterator]();
    const {value, done} = iterator.next();
    while(!done) {
        yield value;
    }
}

const mapped = map(([k, v]) => `${k}, ${v}`, new Map(['a', 1], ['b', 2]));
forEach(console.log, mapped);