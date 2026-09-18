let color = "red";

if (true) {
    let color = "blue";
    let size = 10;
    console.log("A:", color);
    console.log("B:", size);
}

console.log("C:", color);
// console.log('f:', size); there is no let or const variable, where size is defined in global scope. will be  reference error.
// 'a', blue, if this value is true, because this is local scope and i have in let blu color instead of having red wich is in global scope. second console log will be b, 10. then c and red,  because this console.log is outside local scope.

function paint() {
    let color = "green";
    console.log("D:", color);
}
//here nothing happens, since this is only create function. 

paint();
console.log("E:", color);
//  here e and green , because functions let is green its local scope.
// e: red, function is over and now we call global scope again, where let is still red.

const prices = [4, 10, 6];
let total = 0;

for (const price of prices) {
    // let total = 0; if let is here console log cant see it, because it is in global scope. this also would not print 20 because if you want to make variable not zero you have to have it in global scope, otherwise it will be 0 in every new round. once for cycle ends it will be 0 again and does not save 4 or 6 or 10.
    total = total + price;
}

console.log("Total:", total);

