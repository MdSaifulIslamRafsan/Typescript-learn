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


// Function Signatures

let AddFunction : (x: number, y:number) => number;

AddFunction = (a:number, b:number) => {
  return a + b
}

let calculation : (x: number, y:number, z: string) => number;
calculation = (a:number , b:number , c: string) => {
  if(c === "add"){
    return a + b
  } else{
    return a - b
  }
}

console.log(calculation(10 , 20 , "add"));

let user : (id: number | string , userInfo: {
  name: string,
  age: number
}) => void

user = (id: number | string , userInfo: {
  name: string,
  age: number
}) => {
 
}

// Classes type

class player{ 
private name: string;
public age: number;
readonly country: string;

constructor(n:string, a:number, c:string){
  this.name = n;
  this.age = a;
  this.country = c;
}

play(){
  console.log(`${this.name} from ${this.country} is playing`)
}
}

const mashrafi = new player("mashrafi", 40, "Banglasdesh");
const sakib = new player("sakib", 35, "Banglasdesh");

const players: player[] = [];
players.push(mashrafi)
players.push(sakib)
console.log(players)


// Access Modifiers

class player1{ 
 
  
  constructor( private name: string,
    public age: number,
    readonly country: string){}
  
  play(){
    console.log(`${this.name} from ${this.country} is playing`)
  }
  }
  
  const mashrafi1 = new player("mashrafi", 40, "Banglasdesh");
  const sakib1 = new player("sakib", 35, "Banglasdesh");
  
  const players1: player[] = [];
  players.push(mashrafi)
  players.push(sakib)
  console.log(players)