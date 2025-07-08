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

function baseReduce<A, Acc>(
    f: (acc: Acc, a: A) => Acc, acc: Acc, iterator: Iterator<A>
): Acc {
    while(true) {
        const {done, value} = iterator.next();
        if(done) break;
        acc = f(acc, value);
    }

    return acc;
}

function reduce<A, Acc>(
    f: (a: Acc | A, b: A) => Acc,
    accOrIterable: Acc | Iterable<A>,
    iterable?: Iterable<A>
): Acc {
    if(iterable === undefined) {
        const iterator = (accOrIterable as Iterable<A>)[Symbol.iterator]();
        const {done, value: acc} = iterator.next();
        if(done) 
            throw new TypeError("'reduce' of empty iterable with no initial valeu");

        return baseReduce(f, acc, iterator) as Acc;
    } 

    return baseReduce(f, accOrIterable as Acc, iterable[Symbol.iterator]());
}

export function fx<A>(iterable: Iterable<A>): FxIterable<A> {
    return new FxIterable(iterable);
}

// FxIterable 자체로 곧 Iterable이므로 this만 넘기도록 구현해도 동일하게 동작함
class FxIterable<A> {
    constructor(private iterable: Iterable<A>) {}

    map<B>(f: (a: A) => B): FxIterable<B> {
        return fx(map(a => f(a), this));
    }

    filter(f: (a: A) => boolean): FxIterable<A> {
        return fx(filter(f, this));
    }

    forEach(f: (a: A) => void): void {
        return forEach(f, this);
    }

    reduce<Acc>(f: (acc: Acc, a: A) => Acc, acc: Acc):Acc;
    reduce<Acc>(f: (a: A, b: A) => Acc):Acc;
    reduce<Acc>(f: (a: Acc | A, b: A) => Acc, acc?: Acc):Acc {
        return acc === undefined
                ? reduce(f, this)
                : reduce(f, acc, this);
    }

    // 클래스를 리스트로 변환
    toArray(): A[] {
        return [...this];
    }

    [Symbol.iterator]() {
        return this.iterable[Symbol.iterator]();
    }

    to<R>(converter: (Iterable: this) => R): R {
        return converter(this); // this.iterable
    }

}

{
    const sorted = fx([5, 2, 3, 1, 4, 5, 3])
                    .filter(n => n % 2 === 1)
                    .map(n => n * 10)
                    .to(iterable => [...iterable])
                    .sort((a, b) => a - b); // Array.prototype.sort

    console.log(sorted); // [10, 30, 30, 50, 50]
}