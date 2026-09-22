const calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a/b,
}
console.log("add:", calculator.add(8, 2));
console.log("subtract:", calculator.subtract(8, 2));
console.log("multiply:", calculator.multiply(8, 2));
console.log("divide:", calculator.divide(8, 2));

const operations = [calculator.add, calculator.subtract, calculator.multiply, calculator.divide];
for (let i = 0; i < operations.length; i++) {
       console.log(operations[i](20,5));
}
const plus = calculator.add;
console.log(plus(1,2));
console.log(calculator.add);
// calculator.add stores a reference to the function itself, 
// so 'plus' becomes a function that can be called later.
// calculator.add(1, 2) executes the function immediately and 
// stores the resulting value (the sum) inside 'plus'.