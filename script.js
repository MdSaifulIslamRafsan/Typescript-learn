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
const userDetails = (id, user) => {
    console.log(`user id is ${id} name is ${user === null || user === void 0 ? void 0 : user.name} and age is ${user === null || user === void 0 ? void 0 : user.age}`);
};
userDetails(12, { name: "saiful", age: 22 });
const sayHello = (user) => {
    console.log(`hello ${(user === null || user === void 0 ? void 0 : user.age) >= 50 ? 'sir' : 'mr'} ${user === null || user === void 0 ? void 0 : user.name}`);
};
sayHello({ name: "saiful", age: 22 });
// Function Signatures
let AddFunction;
AddFunction = (a, b) => {
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(10, 20, "add"));
let user;
user = (id, userInfo) => {
};
// Classes type
class player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi = new player("mashrafi", 40, "Banglasdesh");
const sakib = new player("sakib", 35, "Banglasdesh");
const players = [];
players.push(mashrafi);
players.push(sakib);
console.log(players);
// Access Modifiers
class player1 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi1 = new player("mashrafi", 40, "Banglasdesh");
const sakib1 = new player("sakib", 35, "Banglasdesh");
const players1 = [];
players.push(mashrafi);
players.push(sakib);
console.log(players);
