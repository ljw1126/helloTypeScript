import { FxIterable } from "./code2-28";

function fx<A>(iterable: Iterable<A>): FxIterable<A> {
    return new FxIterable(iterable);
}

const mapped2 = new FxIterable(['a', 'b'])
    .map(a => a.toUpperCase())
    .map(b => b + b);

console.log([...mapped2]); //['AA', 'BB'], import에서 mapped 실행됨