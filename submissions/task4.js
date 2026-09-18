const calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a * b,
    devide: (a,b) => a/b,
}
console.log(calculator.add(8,2));
console.log(calculator.subtract(8,2));
console.log(calculator.multiply(8,2));
console.log(calculator.devide(8,2));

const operations = [calculator.add, calculator.subtract, calculator.multiply, calculator.devide];
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