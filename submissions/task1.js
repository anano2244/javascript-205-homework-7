function triple (n) {
    return n * 3;
}
const tripleExpression = function (n) {
   return n * 3;
}
const tripleArrow = (n) => n * 3; 

console.log(triple(4), tripleExpression(4), tripleArrow(4));
console.log(tripleArrow);
console.log(tripleArrow(4));
