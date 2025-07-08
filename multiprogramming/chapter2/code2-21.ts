function reduce<A, ACC> (f: (acc: ACC, a: A) => ACC, acc: ACC, iterable: Iterable<A>): ACC {
    for(const a of iterable) {
        acc = f(acc, a);
    }

    return acc;
}

{
const array = [1, 2, 3];
const sum = reduce((acc, a) => acc + a, 0, array);
console.log(sum); // 6


const strings = ['a', 'b', 'c'];
const abc = reduce((acc, a) => `${acc}${a}`, '', strings);
console.log(abc); // abc
}