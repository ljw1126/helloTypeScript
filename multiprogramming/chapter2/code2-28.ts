function* map<A, B>(f: (a: A) => B, iterable: Iterable<A>): IterableIterator<B> {
    for(const a of iterable) {
        yield f(a);
    }
}

export class FxIterable<A> {
    constructor(private iterable: Iterable<A>) {}

    map<B>(f: (a: A) => B): FxIterable<B> {
        return new FxIterable(map(a => f(a), this.iterable));
    }

    [Symbol.iterator]() {
        return this.iterable[Symbol.iterator](); // 위임
    }
}

const mapped = new FxIterable(['a', 'b'])
    .map(a => a.toUpperCase())
    .map(b => b + b);

console.log([...mapped]); //['AA', 'BB']