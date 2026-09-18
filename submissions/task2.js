// function square(n) {
//     return n * n;
// }
// function isAdult(age) {
//     return age >= 18;
// }
// function greet(name) {
//     return `hello ${name}!`;
// }
// function area(width, heigth) {
//     return width * heigth;
// }
// function sayHi() {
//     return 'hi' ;
// }
// function sign(n) {
//     if (n > 0) {
//         return 'positive';
//    } else if (n < 0) {
//     return 'negative'
//    }
//    return 'zero';
// }
 const square = n => n * n;
 const isAdult = age => age >= 18;
 const greet = name => ` hello ${name}`;
 const area=(width,heigth) => width * heigth;
 const sayHi= () => 'hi';
 const sign = n => {
     if (n > 0) {
        return 'positive';
   } else if (n < 0) {
    return 'negative'
   }
   return 'zero';
}
const half = n => {n/2}; 
// this is bug because there is no return
const half1 =n =>{
    return n/2
}
// this will be the correct answer, because when you have curly braces you have to write return.
console.log("square(7):", square(7));
console.log("isAdult(16):", isAdult(16));
console.log('greet("Nino"):', greet("Nino"));
console.log("area(3, 5):", area(3, 5));
console.log("sayHi():", sayHi());
console.log("sign(-4):", sign(-4));
console.log("sign(0):", sign(0));
console.log("half(10):", half(10));