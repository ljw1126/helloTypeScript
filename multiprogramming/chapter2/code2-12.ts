function double(a: number):number;
function double(a: string): string;
function double(a: number | string): number | string {
    if(typeof a === 'number') {
        return a * 2;
    }

    return a + a;
}


console.log(double(10)); // 20
console.log(double('Hi')); // HiHi