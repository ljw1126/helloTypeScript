function* reverse<T>(arrayLike: ArrayLike<T>): IterableIterator<T> {
    let idx = arrayLike.length;
    
    while(idx) {
        yield arrayLike[--idx];
    }
}

const array = ['a', 'b', 'c', 'd', 'e', 'f'];
const reversed = reverse(array);

console.log(reversed.next().value); // f
console.log(reversed.next().value); // e
console.log(reversed.next().value); // d
console.log(array); // ['a', 'b', 'c', 'd', 'e', 'f']