import { fx } from "./code2-30a";

{
    fx(['a', 'b'])
        .map(a => a.toUpperCase())
        .map(a => a + a)
        .forEach(a => console.log(a))
}