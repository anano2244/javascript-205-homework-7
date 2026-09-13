> 🇬🇧 [English version](./README.md)

# საშინაო დავალება 7 — ისრიანი ფუნქციები, ფუნქციები როგორც მნიშვნელობები, scope

მოგესალმებით მეშვიდე საშინაო დავალებაზე! 🎉

მე-6 საშინაო დავალებაში ყოველი ფუნქცია `function name() { … }` დეკლარაცია იყო. ეს დავალება ყველაფერ იმაზეა, რაც ფუნქციებთან მე-7 workshop-ზე გავაკეთეთ:

* **ფუნქციის დაწერის სამი გზა** — დეკლარაცია (declaration), ფუნქცია-გამოსახულება (function expression), ისრიანი ფუნქცია (arrow function)
* **ისრიანი ფუნქციის ორი ხაფანგი** — ფიგურული ფრჩხილები `return`-ის გარეშე და ობიექტის დაბრუნება
* **ფუნქცია მნიშვნელობაა** — შეგიძლიათ ჩადოთ ცვლადში, ობიექტში ან მასივში და იქიდან გამოიძახოთ
* **scope (ხილვადობის არე)** — სად ცხოვრობს ცვლადი და რატომ არ ხვდება შიდა `let` გარე ცვლადს
* **სუფთა და არასუფთა ფუნქციები (pure / impure)** — ფუნქციები, რომლებიც მხოლოდ მნიშვნელობას აბრუნებენ, და ფუნქციები, რომლებიც საკუთარი თავის გარეთ გადიან

სულ **ექვსი სავარჯიშოა**. დანარჩენი ყველაფერი ის არის, რაც უკვე იცით: ცვლადები, `if` / `else`, ციკლები, მასივები, ობიექტები და შაბლონური სტრიქონები.

**ვადა:** მე-9 workshop-მდე.

---

## 📄 ამ დავალების ორი გვერდი

| | |
|---|---|
| **[📚 სავარჯიშოები](./EXERCISES_ka.md)** | ექვსი სავარჯიშო, მათი მოსალოდნელი შედეგი და წესები |
| **[📤 როგორ ჩააბაროთ](./SUBMITTING_ka.md)** | fork, ბრენჩი, Pull Request — ნაბიჯ-ნაბიჯ, ჩეკლისტთან ერთად |

ჯერ წაიკითხეთ ქვემოთ მოცემული მოკლე სექცია, შემდეგ კი სავარჯიშოებზე გადადით.

---

## სანამ დაიწყებთ — ერთი ფუნქცია, სამი გზა

ეს სამი ხაზი **ერთსა და იმავე ფუნქციას** აღწერს:

```javascript
function double(n) { return n * 2 }                     // 1 დეკლარაცია
const doubleExpression = function (n) { return n * 2 }  // 2 ფუნქცია-გამოსახულება
const doubleArrow = (n) => n * 2                        // 3 ისრიანი ფუნქცია

console.log(double(5), doubleExpression(5), doubleArrow(5));  // 10 10 10
```

### ისრიანი ფუნქციის ორი ხაფანგი

**ფიგურული ფრჩხილები სხეულს ნიშნავს.** ფრჩხილების გარეშე `=>`-ის შემდეგ მდებარე გამოსახულება *თავადაა* შედეგი. ფრჩხილებით `return` თქვენ თავად უნდა დაწეროთ.

```javascript
const a = n => n * 2;              // a(5) არის 10
const b = n => { return n * 2 };   // b(5) არის 10
const c = n => { n * 2 };          // undefined — ფრჩხილები არის, return — არა
```

**ობიექტის დასაბრუნებლად მრგვალი ფრჩხილები სჭირდება.** `=>`-ის შემდეგ პირდაპირ დაწერილი `{` სხეულის დასაწყისად აღიქმება, ობიექტად — არა.

```javascript
const bad  = n => { value: n };    // bad(5) არის undefined
const good = n => ({ value: n });  // good(5) არის { value: 5 }
```

### ფუნქცია მნიშვნელობაა

```javascript
const tools = {
    shout: (t) => t.toUpperCase(),
    whisper: (t) => t.toLowerCase()
};
const list = [tools.shout, tools.whisper];

console.log(tools.shout("go"));   // GO
console.log(list[1]("GO"));       // go
console.log(tools.shout);         // [Function: shout] — თავად ფუნქცია
```

> **მრგვალი ფრჩხილები = გამოძახება.** `tools.shout` არის ფუნქცია. `tools.shout("go")` მას გაუშვებს და მოგცემთ ის, რასაც ფუნქცია აბრუნებს.

### სუფთა და არასუფთა

**სუფთა** (pure) ფუნქცია ერთი და იმავე შემავალი მნიშვნელობისთვის ყოველთვის ერთსა და იმავე შედეგს აბრუნებს და საკუთარი თავის გარეთ არაფერს ხვდება. ფუნქცია, რომელიც ბეჭდავს, გარე ცვლადს ან მასივს ცვლის ან `Math.random()`-ს იყენებს, **არასუფთაა** (impure) — მას **გვერდითი ეფექტი** (side effect) აქვს ან გარე რამეზეა დამოკიდებული. არასუფთა ფუნქცია არასწორი არ არის (ბეჭდვა ხომ სასარგებლოა!), მაგრამ ყოველთვის უნდა იცოდეთ, რომელი დაწერეთ.

ახლა გახსენით **[სავარჯიშოები](./EXERCISES_ka.md)**.

---

## სასარგებლო ბმულები

* ფუნქციები: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
* ისრიანი ფუნქციები (arrow functions): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* `function` გამოსახულებები (function expressions): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
* scope: https://developer.mozilla.org/en-US/docs/Glossary/Scope
* `let` და ბლოკის scope: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
* spread სინტაქსი (`...`): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
* `Math.random()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
