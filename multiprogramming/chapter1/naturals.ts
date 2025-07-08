// 1-17
function naturals(end = Infinity): IterableIterator<number> {
    let n = 1;
    return {
        next() : IteratorResult<number> {
            return n <= end 
                ? { value : n++, done : false}
                : { value : undefined, done : true}
        },
        [Symbol.iterator]() {
            return this;
        }
    }
}

const iterator = naturals(5);

for(const num of iterator) {
    console.log(num);
}