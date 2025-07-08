interface CustomIteratorYieldResult<T> {
    done?: false;
    value: T;
}

interface CustomIteratorRetunResult {
    done: true,
    value: undefined;
}

interface CustomIterator<T> {
    next(): CustomIteratorYieldResult<T> | CustomIteratorRetunResult;
}

interface CustomIterable<T> {
    [Symbol.iterator](): CustomIterator<T>;
}

interface CustomIterableIterator<T> extends CustomIterator<T> {
    [Symbol.iterator](): IterableIterator<T>
}