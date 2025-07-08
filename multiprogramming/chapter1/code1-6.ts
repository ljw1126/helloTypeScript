{
    const array = ['a', 'b', 'c', 'd', 'e', 'f'];
    array.reverse();
    console.log(array); // ['f', 'e', 'd', 'c', 'b', 'a']
    console.log(array[0], array[1]); // f e


    const array2= ['a', 'b', 'c', 'd', 'e', 'f'];
    const reversed = reverse(array2);
    console.log(array2); // ['a', 'b', 'c', 'd', 'e', 'f']
    console.log(reversed.next().value); // f
    console.log(reversed.next().value); // e
}