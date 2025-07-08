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

// fx 함수를 활용하여 FxIterable 내부 코드를 더 간결하게 표현 가능
export function fx<A>(iterable: Iterable<A>): FxIterable<A> {
    return new FxIterable(iterable);
}

export class FxIterable<A> {
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

    [Symbol.iterator]() {
        return this.iterable[Symbol.iterator](); // 위임
    }
}
