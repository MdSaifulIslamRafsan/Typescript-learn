"use strict";
console.log("hello world");
const country = "Bangladesh";
console.log(country);
const sum = (num1, num2) => {
    console.log(num1 + num2);
};
sum(2, 3);
let a;
a = "hello world";
console.log(a);
const array = [];
array.push("hello world");
// union type
let b;
b = 34;
b = "hello world";
console.log(b);
// schema type
let obj;
obj = {
    name: "Saiful",
    age: 16,
    price: 1220
};
console.log(obj);
// any type
let z;
z = 10;
z = "hello";
console.log(z);
const c = [];
c.push("Bangladesh");
c.push(56);
console.log(c);
let d;
d = {
    name: "Bangladesh",
    age: 56
};
console.log(d);
// function type 
let myFunc;
myFunc = () => {
    console.log('hello');
};
const myFunction = (a, b, c, d = 10) => {
    console.log(c);
    console.log(d);
    // return a + b
};
console.log(myFunction(20, 30));
