console.log("hello world");

const country = "Bangladesh";
console.log(country);

const sum = (num1: number, num2: number) => {
  console.log(num1 + num2);
};
sum(2, 3);

let a: string;
a = "hello world";
console.log(a);
const array: string[] = [];
array.push("hello world");

// union type
let b: string | number;
b = 34;
b = "hello world";

console.log(b);

// schema type

let obj: {
  name: string;
  age: number;
  price: number;
};
obj = {
  name: "Saiful",
  age: 16,
  price: 1220
};
console.log(obj);



// any type
let z: any;
z = 10;
z = "hello";
console.log(z)

const c : any[] = [];
c.push("Bangladesh")
c.push(56)
console.log(c)
let d: {
    name: any,
    age:any
}
d = {
    name: "Bangladesh",
    age:56
}
console.log(d)

// function type 
let myFunc : Function;

 myFunc = () =>{
  console.log('hello')
}
const myFunction = (a:number , b:number , c?:number , d: number = 10) =>{
  console.log(c)
  console.log(d)
  // return a + b
}

console.log(myFunction(20 , 30))

// Aliases type

type stringOrNum = string | number;
type userObj = {name: string, age: number}


const userDetails = (id: stringOrNum , user: userObj) => {
  console.log(`user id is ${id} name is ${user?.name} and age is ${user?.age}`)
 
}
userDetails(12, {name:"saiful" , age: 22})
const sayHello = (user: userObj) => {
  console.log(`hello ${user?.age >= 50 ? 'sir' : 'mr'} ${user?.name}`)
}
sayHello({name: "saiful" , age: 22})