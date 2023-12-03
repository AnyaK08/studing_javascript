console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

const money = 1000;
const age = 21;
// проверяем, что age больше 18 и money больше 100
const access1 = age > 18 && money > 100;
console.log(access1); // true

// проверяем, что age больше 18 и money больше 1000
const access4 = age > 18 && money > 1000;
console.log(access4);

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

const money1 = 1000;
const age1 = 21;
// проверяем, что age больше 18 или money больше 1000
const access2 = age1 > 18 || money1 > 1000;
console.log(access2); // true

// проверяем, что age больше 22 или money больше 1000
const access3 = age1 > 22 || money1 > 1000;
console.log(access3); // true

let isAlive; // undefined
let name = "Tom";

const result = isAlive && name;
console.log(result);

console.log(false && "Tom"); // false
console.log("Tom" && null); // null
console.log(true && "Tom"); // Tom

console.log(false || "Tom"); // Tom
console.log("Tom" || null); // Tom
console.log(true || "Tom"); // true

let isAlive1; // undefined
console.log(!isAlive1); // true
console.log(!null); // true
console.log(!0); // true
console.log(!10); // false
console.log(!""); // true (пустая строка)
console.log(!"Tom"); // false

const age2 = 22;
age2 <= 17 && console.log("Вам меньше 18 лет. Доступ запрещен.");
age2 > 17 && console.log("Вам больше 17 лет. Доступ разрешен.");

const age3 = 12;
age3 <= 17 || console.log("Вам больше 17 лет. Доступ разрешен.");
age3 > 17 || console.log("Вам меньше 18 лет. Доступ запрещен.");

let a = true;
let b = true;
a &&= b;
console.log(a);

let c = false;
let d = true;
c &&= d;
console.log(c); // false

// [первый операнд - условие] ? [второй операнд] : [третий операнд]
const a1 = 1;
const b1 = 2;
const result2 = a1 < b1 ? a1 : b1;
console.log(result2); // 1

const a2 = 2;
const b2 = 4;
const result1 = a2 > b2 ? a2 + b2 : a2 - b2;
console.log(result1); //-2

// левый_операнд ?? правый_операнд

const result3 = "hello" ?? "world";
console.log(result3); // hello

console.log(0 ?? 5); // 0

console.log("" ?? "javascript"); // "" - пустая строка

console.log(false ?? true); // false

console.log(null ?? "not null"); // not null

console.log(undefined ?? "defined"); // defined

console.log(null ?? null); // null
console.log(undefined ?? undefined); // undefined

// левый_операнд ??= правый_операнд
const message = "Hello JavaScript";
let text = "Hello work!";
text ??= message;
console.log(text); // Hello work!

const message1 = "Hello JavaScript";
let text1 = null;
text1 ??= message1;
console.log(text); // Hello JavaScript

const number1 = "56";
const number2 = 4;
const result4 = number1 + number2;
console.log(result4); // 564
console.log(typeof result4);

const number3 = "56";
const number4 = 4;
const result5 = parseInt(number3) + number4;
console.log(result5); // 60

const numb = "123hello";
const numb1 = parseInt(numb);
console.log(numb1); // 123

console.log(parseInt("abc")); // NaN
const type = typeof NaN;
console.log(type); // number

const number5 = "46.07";
const number6 = "4.98";
let result7 = parseFloat(number5) + parseFloat(number6);
console.log(result7); //51.05

const myArray = [];
const people = ["Tom", "Alice", "Sam"];
console.log(people); // ["Tom", "Alice", "Sam"];
console.log(people[0]); // Tom
const person3 = people[2]; // Sam
console.log(person3); // Sam
people[0] = "Bob";
console.log(people[0]);

const people1 = [
  ["Tom", 25, false],
  ["Bill", 38, true],
  ["Alice", 21, false],
];

console.log(people1[0]); // ["Tom", 25, false]
console.log(people1[1]); // ["Bill", 38, true]
