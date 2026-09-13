> 🇬🇪 [ქართული ვერსია](./EXERCISES_ka.md) · [← Back to the overview](./README.md) · [📤 How to submit](./SUBMITTING.md)

# Homework 7 — Exercises

Create the files below inside `submissions/<your-username>/` and write JavaScript code to solve each task.

Use only what the [Rules](#rules) at the bottom allow. You can run each file with:

```bash
node exercise_1.js
```

Every exercise shows its **expected output**. Your program should print exactly that. (Exercise 5 has one part where the output is hidden on purpose — it says so.)

When you print a value with a label, pass the label and the value as **two arguments**: `console.log("add:", result);` Use the labels shown in each expected output.

---

## `exercise_1.js` — One function, three ways

Write a function that returns its number multiplied by `3` — **three times**, once in each style:

1. `triple` — a **function declaration**
2. `tripleExpression` — a **function expression** stored in a `const`
3. `tripleArrow` — an **arrow function** with no braces and no `return`

Then write these three lines:

```javascript
console.log(triple(4), tripleExpression(4), tripleArrow(4));
console.log(tripleArrow);
console.log(tripleArrow(4));
```

Expected output:

```text
12 12 12
[Function: tripleArrow]
12
```

Look at the last two lines. Without parentheses, `tripleArrow` is **the function itself** — Node.js shows you that it is a function and what its name is. With parentheses, `tripleArrow(4)` **calls** it and you get the result.

---

## `exercise_2.js` — From a function to an arrow

Copy these declarations into your file, then **rewrite every one of them as an arrow function** stored in a `const` with the same name. Delete the old declarations when you are done.

```javascript
function square(n) {
    return n * n;
}

function isAdult(age) {
    return age >= 18;
}

function greet(name) {
    return `Hello, ${name}!`;
}

function area(width, height) {
    return width * height;
}

function sayHi() {
    return "Hi!";
}

function sign(n) {
    if (n > 0) {
        return "positive";
    } else if (n < 0) {
        return "negative";
    }
    return "zero";
}
```

Write each arrow as **short as it can be**:

* if the body is a single expression, use **no braces and no `return`**
* if there is **exactly one** parameter, you may drop the parentheses around it: `n => n * n`
* with **no** parameters or **two** parameters, the parentheses are required: `() => …`, `(width, height) => …`
* `sign` has an `if` inside, so it **needs** braces and `return` — that is fine

Then add this line to your file. It has a bug:

```javascript
const half = n => { n / 2 };
```

Fix `half` so that it returns half of the number, and in a **comment** above it explain in one sentence why the original version returned `undefined`.

Print:

```text
square(7): 49
isAdult(16): false
greet("Nino"): Hello, Nino!
area(3, 5): 15
sayHi(): Hi!
sign(-4): negative
sign(0): zero
half(10): 5
```

> Hint: the label `greet("Nino"):` contains double quotes. Write that label with single quotes around it — `'greet("Nino"):'` — or use `\"` inside double quotes.

---

## `exercise_3.js` — Arrow functions that return objects

Write three arrow functions. **None of them uses braces as a body or the word `return`** — each one returns an object directly, so remember the parentheses.

1. `createPerson(name, age)` — returns an object with the properties `name` and `age`.
2. `createBook(title, pages)` — returns an object with `title`, `pages` and `isLong`. `isLong` is `true` when the book has more than `300` pages, otherwise `false`.
3. `wrap(value)` — returns an object with one property, `value`. Start from this broken version and fix it:

   ```javascript
   const wrap = (value) => { value: value };
   ```

Then:

1. Store `createPerson("Gigi", 25)` in a `const` called `person` and print `person`.
2. Print `person.name`.
3. Print the `age` of `createPerson("Nino", 30)` **without** storing it in a variable first.
4. Print `createBook("The Hobbit", 310)`.
5. Print `createBook("The Little Prince", 96)`.
6. Print `wrap(5)`.

Expected output:

```text
{ name: 'Gigi', age: 25 }
Gigi
30
{ title: 'The Hobbit', pages: 310, isLong: true }
{ title: 'The Little Prince', pages: 96, isLong: false }
{ value: 5 }
```

> Hint: `pages > 300` is already `true` or `false`, so you can use it directly as the value of `isLong`.
>
> For step 3: `createPerson("Nino", 30)` *is* an object once it has returned, so you can put `.age` right after the call.

---

## `exercise_4.js` — A function is a value

Create an object called `calculator` with four properties. **Every property is an arrow function** that takes two numbers:

* `add` — returns `a + b`
* `subtract` — returns `a - b`
* `multiply` — returns `a * b`
* `divide` — returns `a / b`

Then write the program in three parts.

**Part 1 — call the functions from the object.** Print the result of each one with `8` and `2`.

**Part 2 — functions in an array.** Create an array called `operations` that holds the four functions from `calculator` (in the order add, subtract, multiply, divide — **not** their results!). Then use a `for` loop and call every function in the array with `20` and `5`, printing each result.

**Part 3 — a function in a variable.** Store `calculator.add` in a `const` called `plus` (no parentheses). Print `plus(1, 2)`, and then print `calculator.add` itself.

Expected output:

```text
add: 10
subtract: 6
multiply: 16
divide: 4
25
15
100
4
3
[Function: add]
```

Then answer this question in a comment at the bottom of the file:

**What is the difference between `const plus = calculator.add;` and `const plus = calculator.add(1, 2);`?**

> Hint: inside the loop, `operations[i]` is a function — so you call it just like any other function, by putting the arguments in parentheses right after it: `operations[i](20, 5)`.

---

## `exercise_5.js` — Scope

This exercise has two parts.

### Part A — predict first, then run

Copy this code into your file:

```javascript
let color = "red";

if (true) {
    let color = "blue";
    let size = 10;
    console.log("A:", color);
    console.log("B:", size);
}

console.log("C:", color);

function paint() {
    let color = "green";
    console.log("D:", color);
}

paint();
console.log("E:", color);
```

**Before you run the file**, write a comment under the code with what you think each line prints:

```javascript
// My prediction:
// A: ...
// B: ...
// C: ...
// D: ...
// E: ...
```

Now run the file and compare. If a prediction was wrong, **do not change it** — write one more comment next to it that explains what really happened. The output of Part A is not shown here on purpose: running the file *is* how you check.

Then answer this question in a comment: **what would happen if you added `console.log("F:", size);` at the very bottom of Part A, and why?** Try it, read the error, write your answer, and then delete that line again so the file runs.

### Part B — fix the bug

Copy this code under Part A. It is supposed to add up the prices, but it crashes:

```javascript
const prices = [4, 10, 6];

for (const price of prices) {
    let total = 0;
    total = total + price;
}

console.log("Total:", total);
```

Fix it by **moving one line**. Do not add any new lines, and do not move the `console.log`.

The last line of the whole file's output must be:

```text
Total: 20
```

Then explain in a comment: **why could `console.log` not see `total`?** And a bonus question: even if it could, why would the original code *still* not give `20`?

> Hint: a `let` lives only inside the `{ }` block where it was written — and the body of a loop is a block that starts again from the top on every repetition.

---

## `exercise_6.js` — Pure or impure?

This exercise has two parts.

### Part A — sort the functions

Copy this code into your file:

```javascript
let score = 0;
const cart = ["Milk"];

const square = (n) => n * n;
const addPoints = (points) => {
    score = score + points;
    return score;
};
const fullName = (first, last) => `${first} ${last}`;
const rollDice = () => Math.floor(Math.random() * 6) + 1;
const addToCart = (item) => {
    cart.push(item);
    return cart.length;
};
const printSum = (a, b) => {
    console.log(a + b);
};
```

For **each of the six functions**, write a comment that says whether it is **pure** or **impure**, and give the reason in a few words. For example:

```javascript
// square — pure: it only uses its parameter and returns a value
```

> Hint: ask two questions about every function. **Does it change or print anything outside itself?** **Could the same arguments ever give a different result?** If the answer to either one is yes, the function is impure.

### Part B — make them pure

`addPoints` and `addToCart` both change a variable that lives **outside** the function. Write a pure version of each:

1. `addPointsPure(currentScore, points)` — **returns** the new score. It does not read or change the outer `score` variable.
2. `withItem(list, item)` — **returns a new array** that has everything from `list` plus `item` at the end. It must **not** change `list`.

Then:

1. Print `addPointsPure(0, 5)` **two times**.
2. Print `score`, to prove it was never changed.
3. Store `withItem(cart, "Bread")` in a `const` called `bigger`.
4. Print `cart`, then print `bigger`.

Expected output:

```text
addPointsPure(0, 5): 5
addPointsPure(0, 5): 5
score: 0
cart: [ 'Milk' ]
bigger: [ 'Milk', 'Bread' ]
```

Same input, same output — twice in a row. And `cart` still has only `'Milk'`, because `withItem` built a new array instead of pushing into the old one.

> Hint: the spread operator from Workshop 6 copies an array: `[...list]` is a new array with the same elements. What can you add inside those square brackets, after `...list`?
>
> Do **not** call `addPoints` or `addToCart` from Part A anywhere in your file — calling them would change `score` and `cart`, and your output would not match.

---

## Rules

You may use:

* Operators (`+ - * / % ** += ++ === < >= && || !`), `.length`, array indexes, `Math` methods
* `const` and `let`
* Template literals and string methods
* `if` / `else if` / `else`
* `for`, `while` and `for...of` loops
* Arrays, `.push()`, and the spread operator `...` to copy an array
* Objects and their properties
* **Function declarations, function expressions and arrow functions**, parameters and `return`

In **exercises 2–6**, write every function you create as an **arrow function**, unless the exercise gives you a declaration to copy (like `paint` in exercise 5).

Not allowed **in this homework**:

* `map`, `filter`, `find`, `some`, `every`, `reduce`, `forEach` and any other method that takes a function as an argument — write the loop yourself
* Default parameter values (`const greet = (name = "stranger") => …`)
* `var` — use `const` or `let`
* `prompt()` — it does not exist in Node.js, so the file would crash

Passing a function **into** another function (a callback) is the next step, and the array methods above are built exactly on it. This homework stays one step before that: first get completely comfortable with a function being a value you can store and call.

---

When your six files are ready, go to **[How to submit](./SUBMITTING.md)**.
