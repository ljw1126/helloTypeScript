import { fx } from "./code2-34";

const num = fx([1, 2, 3, 4, 5])
        .filter(n => n % 2 === 1)
        .map(n => n * 10)
        .reduce((a, b) => a + b);

console.log(num); //90


const num2 = fx([1, 2, 3, 4, 5])
        .filter(n => n % 2 === 1)
        .map(n => n * 10)
        .reduce((a, b) => a + b, 10); // 초기값이 있는 경우

console.log(100); // 100