var a = 1;
var b = 2;
let c;
const PI = 3.14;
c = a + b;
console.log("sum of a and b:");
console.log(c);

let div = document.getElementById("container");
console.log(div);
div.innerText = "sum of a and b: " + c;
// let a = 1;

a = 10;
console.log(a);
// PI = 10;
a;

// Number
const x1 = 45;
const y = 123.897;
const z = -0.123;
const num1 = 0b1011;    // число 11 в десятичной системе
console.log(num1);      // 11

// Тип BigInt
let num = 9007199254740991
console.log(num);       // 9007199254740991
console.log(num + 1);   // 9007199254740992
console.log(num + 2);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
let dimension = 19007n;
const value = 2545n;
console.log(dimension);
const num2 = 9223372036854775801n;
console.log(num2);

// Тип Boolean
const isAlive = true;
const isDead = false;
console.log(isAlive);

// Строки String
const user = "Tom";
const company = 'Microsoft';
const language = `JavaScript`;
 
console.log(user);
console.log(company);
console.log(language);

const text = "Hello METANIT.COM\nHello\tWorld";
console.log(text); 

// Интерполяция
const user1 = "Tom";
const age3 = 37;
const isMarried = false;
const text2 = `Name: ${user} Age: ${age3}   IsMarried: ${isMarried}`;
const text1 = `Name: ${user1}`;
console.log(text1);  // Name: Tom
console.log(text2);

let email;
console.log(email); // undefined
email = null;
console.log(email);     // null- отсутствует значение

// object
const user2 = {name: "Tom", age:24};
console.log(user2.name);
console.log(user2.age);

// Слабая/динамическая типизация
let id;  // тип undefined
console.log(id);
id = 45;  // тип number
console.log(id);
id = "45"; // тип string
console.log(id);

let id1;
console.log(typeof id1);       // undefined
 
id1 = 45;
console.log(typeof id1);   // number
 
id1 = 45n;
console.log(typeof id1);     // bigint
 
id1 = "45";
console.log(typeof id1);     // string

// Сложение:


// const x = 50 + 10;
// console.log(x); // 60
// Вычитание:


// const x = 50 - 10;
// console.log(x); // 40
// Умножение:


// const x = 50 * 10;
// console.log(x); // 500
// Деление:


// const x = 50 / 10;
// console.log(x); // 5
 
// const z = 50 / 4;
// console.log(z); // 12.5
// Деление по модулю (оператор %) возвращает остаток от деления:


// const x = 15 % 4;
// console.log(x); // 3
let x = 5;
let z1 = ++x;
console.log(x);
console.log(z1);

let a1 = 5;
let b1 = a1++;
console.log(a1); // 6
console.log(b1); 

let x2 = 10;
let y2 = 5 + (6 - 2) * --x2;
 y2 = 5 + (6 - 2) * x2--;
console.log(y2); //41

let a2 = 23;
a2 += 5; // аналогично a = a + 5
console.log(a2); // 28

const income = 100;
const strIncome = "100";
const result = income == strIncome;
console.log(result); //true

const income1 = 100;
const strIncome1 = "100";
const result1 = income1 === strIncome1;
console.log(result1); // false
// Потому что в операторе тождественности тип тоже должен совпадать

const money = 1000;
const age = 21;
// проверяем, что age больше 18 и money больше 100
const access1 = (age > 18) && (money > 100);
console.log(access1); // true
 
// проверяем, что age больше 18 и money больше 1000
const access2 = age > 18 && money > 1000;
console.log(access2);

const money1 = 1000;
const age1 = 21;
// проверяем, что age больше 18 или money больше 1000
const access3 = age1 > 18 || money1 > 1000;
console.log(access1); // true
 
// проверяем, что age больше 22 или money больше 1000
const access4 = age1 > 22 || money1 > 1000;
console.log(access2);   // true