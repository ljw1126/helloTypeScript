function* naturals(end = Infinity): IterableIterator<number> {}
function forEach<A>(f: (a: A) => void, iterable: Iterable<A>): void {}
function* map<A, B>(f: (a: A) => B, iterable: Iterable<A>): IterableIterator<B> {}
function* filter<A>(f: (a: A) => boolean, iterable: Iterable<A>): IterableIterator<A> {}

function printNumber(n: number) {
    return console.log(n);
}

// filter -> map -> forEach
forEach(printNumber, 
    map(n => n * 10, 
        filter(n => n % 2 === 1, naturals(5))
    )
);

forEach(printNumber, 
    filter(n => n % 2 === 1, 
        map(text => parseInt(text), 
            map(el => el.textContent!, 
                document.querySelectorAll('div')
            )
        )
    )
);

