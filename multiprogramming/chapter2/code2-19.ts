function* map<A, B>(f: (a: A) => B, iterable: Iterable<A>): IterableIterator<B> {
    for(const a of iterable) {
        yield f(a);
    }
}

const array:string[] = ['1', '2', '3'];
const mapped = map(a => parseInt(a), array); // Object [Generator] {}
console.log([...mapped]); // [1, 2, 3]


// 한 개만 구조 할당
const [head] = map(a => a.toUpperCase(), ['a', 'b', 'c']);
console.log(head); // A