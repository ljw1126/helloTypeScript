function* map<A, B>(f: (a: A) => B, iterable: Iterable<A>): IterableIterator<B> {
    for(const a of iterable) {
        yield f(a);
    }
}

function* filter<A>(f: (a: A) => boolean, iterable: Iterable<A>): IterableIterator<A> {
    for(const a of iterable) {
        if(f(a)) {
            yield a;
        }
    }
}

function forEach<A>(f: (a: A) => void, iterable: Iterable<A>): void {
    for(const a of iterable) {
        f(a);
    }
}

// reduce 추가
function reduce<A, ACC> (f: (acc: ACC, a: A) => ACC, acc: ACC, iterable: Iterable<A>): ACC {
    for(const a of iterable) {
        acc = f(acc, a);
    }

    return acc;
}

export class FxIterable<A> {
    constructor(private iterable: Iterable<A>) {}

    map<B>(f: (a: A) => B): FxIterable<B> {
        return new FxIterable(map(a => f(a), this.iterable));
    }

    filter(f: (a: A) => boolean): FxIterable<A> {
        return new FxIterable(filter(f, this.iterable));
    }

    forEach(f: (a: A) => void): void {
        return forEach(f, this.iterable);
    }

    reduce<Acc>(f: (acc: Acc, a: A) => Acc, acc: Acc):Acc {
        return reduce(f, acc, this.iterable);
    }

    [Symbol.iterator]() {
        return this.iterable[Symbol.iterator](); // 위임
    }
}
