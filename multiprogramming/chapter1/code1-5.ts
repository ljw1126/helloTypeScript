function reverse<T>(arrayLike: ArrayLike<T>): Iterator<T> {
    let idx = arrayLike.length;
    return {
        next() {
            if(idx === 0) {
                return { value: undefined, done: true};
            } else {
                return { value: arrayLike[--idx], done: false};
            }
        }
    }
}

{
    const array = ['a', 'b'];
    const reversed = reverse(array);
    console.log(array); // ['a', 'b'], 원본 배열 그대로 

    console.log(reversed.next().value); // b
    console.log(reversed.next().value); // a
    console.log(reversed.next().value); // undefined
}