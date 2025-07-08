// 인자로 입력받는 값을 항상 그대로 돌려주는 함수
function constant<T>(a: T): () => T {
    return () => a;
}

console.log(constant(5)); // [Function (anonymous)]

const getFive = constant(5);
const ten: number = getFive() + getFive(); // 변수 할당해야 실행되네
console.log(ten); // 10

const getHi = constant("Hi");
const hi2: string = getHi() + getHi();
console.log(hi2); // HiHi