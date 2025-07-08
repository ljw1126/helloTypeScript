import { fx } from "./code2-51";

const set = fx([5, 2, 3, 1, 4, 5, 3])
    .filter(n => n % 2 === 1)
    .map(n => n * 10)
    .to(iterable => new Set(iterable))
    .difference(new Set([10, 20])); // https://github.com/tc39/proposal-set-methods

console.log([...set]); // [50, 30]


/*
    - difference()는 표준 ECMAScript 기능이 아님
    - 이 메서드는 ECMAScript Proposal (TC39 Stage 3 이상) 에서만 사용 가능
    - tsconfig.json 수정 필요 
    {
        "compilerOptions": {
            "target": "esnext",
            "lib": ["esnext", "dom"],
            ...
        }
    }
*/