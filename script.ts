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
};
obj = {
  name: "Saiful",
  age: 16,
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