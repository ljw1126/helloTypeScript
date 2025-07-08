function* filter<A>(f: (a: A) => boolean, iterable: Iterable<A>): IterableIterator<A> {
    for(const a of iterable) {
        if(f(a)) {
            yield a;
        }
    }
}

{
    const array:number[] = [1, 2, 3, 4];
    const filtered = filter(a => a % 2 === 0, array);
    console.log([...filtered]); // [2, 4]
}


