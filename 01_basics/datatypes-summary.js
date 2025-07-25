// primitive data types summary

// 7 types of primitive data types in JavaScript
// 1. Number, 2. String, 3. Boolean, 4. Undefined, 5. Null, 6. Symbol, 7. BigInt

const score = 100; // Number
const scoreValue = 100.6; // Number

const isLoggedIn = true; // Boolean
const outSideTemp = null; // Null
let userName; // Undefined

const id = Symbol('123'); // Symbol
const authoerId = Symbol('123'); // Symbol

console.log(id);
console.log(authoerId);
console.log(id === authoerId); // false, because symbols are unique

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// Reference: non-primitive data types
// 1. Object, 2. Array, 3. Function

const heros = ['Thor', 'Ironman', 'Hulk']; // Array
const myObject = {
    name: 'John',
    age: 30,
    isActive: true,
    hobbies: ['reading', 'gaming'],
    address: {
        city: 'New York',
        country: 'USA'
    }
}; // Object
const greet = function() { // Function
    console.log('Hello, World!');
};

// +==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+
// memory
// Primitive datatype use (Stack memory) and non-primitive datatype use (heap memory).

let myInstagramName = "priyansh_hirpara.23"; // String
let antherName = myInstagramName; // Copying the value
console.log(myInstagramName); // priyansh_hirpara.23
console.log(antherName); // priyansh_hirpara.23
// Changing the value of antherName
antherName = "hirpara_priyansh"; // Changing the value
console.log(myInstagramName); // priyansh_hirpara.23
console.log(antherName); // hirpara_priyansh

let UserOne = {
    name: "Priyansh",
    age: 23
}; // Object

let UserTwo = UserOne; // Copying the reference
UserTwo.name = "Hirpara"; // Changing the name in UserTwo
console.log(UserOne.name); // Hirpara
console.log(UserTwo.name); // Hirpara