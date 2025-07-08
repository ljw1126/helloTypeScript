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

// code2-22.ts
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

class FxIterable<A> {
    constructor(private iterable: Iterable<A>) {}

    map<B>(f: (a: A) => B): FxIterable<B> {
        return fx(map(a => f(a), this.iterable));
    }

    filter(f: (a: A) => boolean): FxIterable<A> {
        return fx(filter(f, this.iterable));
    }

    forEach(f: (a: A) => void): void {
        return forEach(f, this.iterable);
    }

    // 함수나 메서드의 시그니처를 여러 개 정의하고 실제 구현은 하나만 제공
    reduce<Acc>(f: (acc: Acc, a: A) => Acc, acc: Acc):Acc;
    reduce<Acc>(f: (a: A, b: A) => Acc):Acc;
    reduce<Acc>(f: (a: Acc | A, b: A) => Acc, acc?: Acc):Acc {
        return acc === undefined
                ? reduce(f, this.iterable)
                : reduce(f, acc, this.iterable);
    }

    [Symbol.iterator]() {
        return this.iterable[Symbol.iterator](); // 위임
    }
}
