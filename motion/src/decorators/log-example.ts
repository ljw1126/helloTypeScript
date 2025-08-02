function Log(_:any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const newDescriptor = {
    ...descriptor,
    value: function(...args: any[]): any {
        console.log(`Calling ${name} with arguments`);
        console.log(args);
        const result = descriptor.value.apply(this, args);
        console.log(`Result : ${result}`);
        
        return result;
    }
  }

  return newDescriptor;
}

class Calculator {
  @Log
  add(x: number, y: number): number {
    return x + y;
  }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2));