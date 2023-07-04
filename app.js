// операторы присваивания
let age = 24;
age += 2; //age = age + 2
age -= 3; //age = age - 2
age *= 2; //age = age * 2
age /= 2; //age = age / 2
 
age++;
age--;

console.log(age);


// Операторы сравнения 

const petya = 20;
console.log(age > petya);
console.log(age >= petya);
console.log(age < petya);
console.log(age <= petya);
console.log(age == petya);


// Порядок операторов
// Ссылка на приоритет оперторов --->>>>   
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

// 100 -(12) 10 >(10) 90 -(12) 5
 
const a = (6 + 10) / 2;
console.log(a);

// оператор присваивания

let b;
let c;
c = b = 100 + 50;
console.log(c);
console.log(b);
 

// Порядок операторов

// Примитивные типы

// const age = 18; ----- числа
// const surname = 'Иванов'; ---- строки
// const isAdmin = true,  ----- true или false
// const isAdmin = undefined; ---- не заданное значение
// let data;
// let data = null;   ------ пустое значение.
// const admin = Symbol('Admin');    --- Уникальное неизменное значени
// const big = BigInt(9999999)  ----- работа с большими числами


let v = 5;
let x = 5.6;
console.log(typeof v);
console.log(typeof x);
v = 'строка';
console.log(typeof v);
let isAdmin = v > 10;
console.log(typeof isAdmin);


let g;
console.log(typeof g);
g = 11;
console.log(typeof g);

let q = null;
console.log(typeof q);

