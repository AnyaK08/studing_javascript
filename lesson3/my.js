const income = 100;
if(income > 50) {
     
    console.log("доход больше 50");
}
const income1 = 100;
const age = 19;
if(income1 > 50 && age > 18){
 
    console.log("доход больше 50");
    console.log("возраст больше 18");
}
let myVar = 89;
if(myVar){
     
    console.log(`Переменная myVar имеет значение: ${myVar}`);
}
const income2 = 45;
if(income2 > 50){
 
    console.log("Доход больше 50");
}
else{
    console.log("Доход меньше или равен 50");
}
const income3 = 50;
if(income3 > 50){

    console.log("Income is more than 50");
}
else{
    console.log("Income is less than 50");
}
// else if- доп условие 
const income4 = 50;
if(income4 > 50) {
    console.log("Доход больше 50");
}
else if(income4 === 50){
    console.log("Доход равен 50");
}
else{
    console.log("Доход меньше 50");
}
// их можно делать несколько
const income5 = 500;
if(income5 < 200){
 
    console.log("Доход ниже среднего");
}
else if(income5>=200 && income5<300){
     
    console.log("Чуть ниже среднего");
}
else if(income5>=300 && income5<400){
     
    console.log("Средний доход");
}
else{
    console.log("Доход выше среднего");
}
// switch-case
const income6 = 500;
switch(income6){

    case 100 : 
        console.log("Доход равен 100");
    break
    case 200 : 
        console.log("Доход равен 200");
    break
    case 500 : 
        console.log("Доход равен 500");
 
   
}

const income7 = 200;
switch(income7){
 
    case 100 :
    case 200 :
        console.log("Доход равен 100 или 200");
        break;
    case 500 : 
        console.log("Доход равен 500");
        break;
}

const income8 = 700;
switch(income8){
 
    case 100 : 
        console.log("Доход равен 100");
        break;
    case 200 : 
        console.log("Доход равен 200");
        break;
    case 500 : 
        console.log("Доход равен 500");
        break;
    default: 
        console.log("Доход неизвестной величины");
        break;
}
for(let i = 0; i<5; i++){
     
    console.log(i);
}
console.log("Конец работы");
for(let i = 0; i < 10; i+=2){
      
    console.log(i);
}

const people = ["Tom", "Sam", "Bob"];
for(let i=0; i < 3; i++){
      
     console.log(people[i]);
}
for(let i = 1, j=1; i < 5, j < 4; i++, j++){
      
    console.log(i + j);
}
// 1 итерация: i=1, j=1; i + j = 2
// 2 итерация: i=2, j=2; i + j = 4
// 3 итерация: i=3, j=3; i + j = 6
for(let i=1; i <= 5; i++){
      
    for(let j = 1; j <=5; j++){
       console.log(i * j);
    }
}
const people1 = [["Tom", 39], ["Sam", 28],["Bob", 42]];
for(let i=0; i < 3; i++){   // перебираем двухмерный массив
 
    for(let j=0; j < 2; j++){ // перебираем вложенные массивы
     
        console.log(people1[i][j]);
    }
    console.log("=================");   // для разделения элементов
}


let a = 1;
while(a <=5){
     
    console.log(a);
    a++;
}
let b = 1;
do{
    console.log(b);
    b++;
}while(b < 1)

for(let i=1; i <= 6; i++){
      
    if(i===4) break;
    console.log(i);
}
console.log("Конец работы");
for(let i=1; i <= 6; i++){
      
    if(i===4) continue;
    console.log(i);
}
console.log("Конец работы");

const person = {name: "Tom", age: 37};
for(prop in person){
      
    console.log(prop);
}
const person1 = {name: "Tom", age: 37};
for(prop in person1){
      
    console.log(prop, person1[prop]);
}
const text = "Hello";
for(char of text){
      
     console.log(char);
}