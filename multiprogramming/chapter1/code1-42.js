function filter(f, iterable) {
    const iterator = iterable[Symbol.iterator]();
    return {
        next() {
            const { done, value } = iterator.next();
            if(done) return {done, value};
            if(f(value)) return {done, value};
            return this.next();
        },
        [Symbol.iterator]() {
            return this;
        }
    }
}

console.log(...filter(x => x % 2 === 1, [1, 2, 3, 4, 5])); // 1 3 5 