// map 함수를 제네레이터로 구현
// 제네레이터는 항상 IterableIterator를 반환함
export function* map<A, B> (
    f: (value: A) => B, iterable: Iterable<A>
): IterableIterator<B> {
    for (const value of iterable) {
        yield f(value);
    }
}