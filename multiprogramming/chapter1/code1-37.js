import { forEach } from "./ex1-36.js";

function* map(f, iterable) {
    for(const value of iterable) {
        yield f(value);
    }
}

const array = [1, 2, 3];
const mapped = map(x => x * 2, array);
console.log([...mapped]);

const mapped2 = map(x => x * 3, naturals(3));
forEach(console.log, mapped2);