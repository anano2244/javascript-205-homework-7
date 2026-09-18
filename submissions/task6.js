// part a
let score = 0;
const cart = ["Milk"];

const square = (n) => n * n; 
// square-pure : it only uses its parameter and returns a value
const addPoints = (points) => {
    score = score + points;
    return score;
};
// impure, because it modifies an external variable (score)
const fullName = (first, last) => `${first} ${last}`;
// pure, only uses its parameter
const rollDice = () => Math.floor(Math.random() * 6) + 1;
// rolldice is impure, because it has random and gives always different numbers.
const addToCart = (item) => {
    cart.push(item);
    return cart.length;
};
// first it will be referance error, because there is no cart variable)) second, if you want to save new datas you have to have the variable outside function, because once function is done it does not save old data.
const printSum = (a, b) => {
    console.log(a + b);
};
// impure function, because if you use console log, you can see sum on terminal space,but you certanly did not save result in compiuter.
// part b
const addPointsPure = (currentScore, points) => currentScore + points;
const withItem = (list, item) => [...list, item];
const bigger = withItem (cart, 'bread');
// both of them is pure, no side effects and gives always the same return, not depended on something else
    
console.log(addPointsPure (0,5));
console.log(addPointsPure(0,5));
console.log(score);
console.log(cart);
console.log(bigger);

