import { fx } from "./code2-51"; 

const set = fx([5, 2, 3, 1, 4, 5, 3])
    .filter(n => n % 2 === 1)
    .map(n => n * 10)
    .to(iterable => new Set(iterable));

// 참고. import 하는 타입스크립트 파일에서 실행 구문이 있어 추가로 결과값이 출력됨

console.log(set); // Set(3) [50, 30, 10]; 


const size = fx([5, 2, 3, 1, 4, 5, 3])
    .filter(n => n % 2 === 1)
    .map(n => n * 10)
    .to(iterable => new Set(iterable)) // Set<number> 변환
    .add(10) // set의 prototype method
    .add(20)
    .size;

console.log(size); // 4