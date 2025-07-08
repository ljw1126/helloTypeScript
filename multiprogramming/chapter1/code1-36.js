export function forEach(f, iterable) {
    const iterator = iterable[Symbol.iterator]();
    let result = iterator.next();
    while(!result.done) {
        f(result.value);
        result = iterator.next();
    }
}

const set = new Set([4, 5, 6]);
forEach(console.log, set);