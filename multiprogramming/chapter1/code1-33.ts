import { map } from "./code1-32";

const array = [1, 2, 3, 4];
const mapped: IterableIterator<number> = map(x => x * 2, array);
const iterator2 = mapped[Symbol.iterator]();

console.log(mapped.next().value); // 2
console.log(iterator2.next().value); // 4
console.log([...iterator2]); // [6, 8]