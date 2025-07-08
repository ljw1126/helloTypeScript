function* filter(f, iterable) {
    for(const value of iterable) {
        if(f(value)) {
            yield value;
        }
    }
}


const array = [1, 2, 3, 4, 5];
const filtered = filter(x => x % 2 === 0, array);
console.log([...filtered]); // [2, 4]