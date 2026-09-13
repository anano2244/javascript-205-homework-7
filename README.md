> 🇬🇪 [ქართული ვერსია](./README_ka.md)

# Homework 7 — Arrow functions, functions as values, scope

Welcome to your seventh homework! 🎉

In Homework 6 every function was a `function name() { … }` declaration. This homework is about everything we did with functions in Workshop 7:

* **three ways to write a function** — declaration, function expression, arrow function
* the **two arrow traps** — braces without `return`, and returning an object
* **a function is a value** — you can put it in a variable, an object or an array, and call it from there
* **scope** — where a variable lives, and why an inner `let` does not touch the outer one
* **pure and impure functions** — functions that only return a value, and functions that reach outside themselves

There are **six exercises**. Everything else is what you already know: variables, `if` / `else`, loops, arrays, objects and template literals.

**Deadline:** before Workshop 9.

---

## 📄 The two pages of this homework

| | |
|---|---|
| **[📚 Exercises](./EXERCISES.md)** | The six exercises, their expected output, and the rules |
| **[📤 How to submit](./SUBMITTING.md)** | Fork, branch, Pull Request — step by step, plus the checklist |

Read the short section below first, then go to the exercises.

---

## Before you start — one function, three ways

These three lines define **the same function**:

```javascript
function double(n) { return n * 2 }                     // 1 declaration
const doubleExpression = function (n) { return n * 2 }  // 2 function expression
const doubleArrow = (n) => n * 2                        // 3 arrow function

console.log(double(5), doubleExpression(5), doubleArrow(5));  // 10 10 10
```

### The two arrow traps

**Braces mean a body.** Without braces, the expression after `=>` *is* the result. With braces, you must write `return` yourself.

```javascript
const a = n => n * 2;              // 10 for a(5)
const b = n => { return n * 2 };   // 10 for b(5)
const c = n => { n * 2 };          // undefined — braces, but no return
```

**Returning an object needs parentheses.** A `{` right after `=>` is read as the start of a body, not as an object.

```javascript
const bad  = n => { value: n };    // bad(5) is undefined
const good = n => ({ value: n });  // good(5) is { value: 5 }
```

### A function is a value

```javascript
const tools = {
    shout: (t) => t.toUpperCase(),
    whisper: (t) => t.toLowerCase()
};
const list = [tools.shout, tools.whisper];

console.log(tools.shout("go"));   // GO
console.log(list[1]("GO"));       // go
console.log(tools.shout);         // [Function: shout] — the function itself
```

> **The parentheses are the call.** `tools.shout` is the function. `tools.shout("go")` runs it and gives you what it returns.

### Pure and impure

A **pure** function gives the same output for the same input and touches nothing outside itself. A function that prints, changes an outer variable or array, or uses `Math.random()` is **impure** — it has a **side effect** or depends on something outside. Impure is not wrong (printing is useful!), but you should always know which one you wrote.

Now open the **[exercises](./EXERCISES.md)**.

---

## Helpful links

* Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
* Arrow function expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* `function` expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
* Scope: https://developer.mozilla.org/en-US/docs/Glossary/Scope
* `let` and block scope: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
* Spread syntax (`...`): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
* `Math.random()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
