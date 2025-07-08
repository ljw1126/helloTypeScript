function forEach(f, iterable) {
    for(const value of iterable) {
        f(value);
    }
}

const array = [1, 2, 3];
forEach(console.log, array);