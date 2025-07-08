// 제네레이터 방식
function* filter(f, iterable) {
    const iterator = iterable[Symbol.iterator]();
    while(true) {
        const {value, done} = iterator.next();
        if(done) break;
        if(f(value)) {
            yield value;
        }
    }
}

const array = [1, 2, 3, 4, 5];
const filtered = filter(x => x % 2 === 0, array);
console.log([...filtered]); // [2, 4]