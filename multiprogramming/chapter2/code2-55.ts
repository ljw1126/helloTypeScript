import { fx } from "./code2-54";

const result = fx([5, 2, 3, 1, 4, 5, 3])
    .filter(n => n % 2 === 1)
    .map(n => n * 10)
    .chain(iterable => new Set(iterable)) // Set으로 중복제거, Set도 이터러블
    .reduce((a, b) => a + b); // FxIterable<number>

console.log(result); // 90


const result2 = fx([5, 2, 3, 1, 4, 5, 3])
    .filter(n => n % 2 === 1)
    .map(n => n * 10)
    .chain(iterable => new Set(iterable)) // Set도 이터러블
    .map(n => n - 10) // FxIterable<number>.map<number>(...)
    .reduce((a, b) => `${a} ${b}`);

console.log(result2);  // 40 20 0
