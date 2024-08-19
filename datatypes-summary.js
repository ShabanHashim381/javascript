// Primitive

// 7 types : String , Number , boolearn , null , undefined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaban","shaban","shaban"];
let myObj = {
  name:"shaban",
age: 22
}
console.log(myObj)

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://tc39.es/ecma262/#sec-typeof-operator


// *********************************************

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename 
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)


let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);