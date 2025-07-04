let score = "33" 
let scoreWithoutQuotes = "33Abc";
let IssLoggedIn = false;
let userId = null;
let userName = undefined;

console.log(typeof score); // string
console.log(typeof(score)); // It is write as method, but not recommended, type of this is also string

let valueInNumber = Number(score); // convert string to number
console.log(typeof valueInNumber); // number

let valueInNumberWithoutQuotes = Number(scoreWithoutQuotes); // convert string to number
console.log(typeof valueInNumberWithoutQuotes); // number
console.log(valueInNumberWithoutQuotes); // NaN, Not a Number, because it cannot convert "33Abc" to number 

console.log(typeof IssLoggedIn); // boolean
let isLoggedInNumber = Number(IssLoggedIn); // convert boolean to number
console.log(isLoggedInNumber); // 0, because false is converted to 0

console.log(typeof userId); // object, because null is a standalone value
let userIdNumber = Number(userId); // convert null to number
console.log(userIdNumber); // 0, because null is converted to 0

console.log(typeof userName); // undefined, because userName is not defined
let userNameNumber = Number(userName); // convert undefined to number
console.log(userNameNumber); // NaN, because undefined is converted to NaN


// "33" => 33
// "33Abc" => NaN
// false => 0; true => 1
// null => 0
// undefined => NaN
// empty string is in boolean is false, so it is 0 and "priyansh" is true, so it is 1


// *******************************************Operations*******************************************
console.log("********************************************Operations*******************************************");

let value = 3
let negativeValue = -value; // negative of value
console.log("Negative value :",negativeValue); // -3

console.log(2+2); // addition, 4
console.log(2-2); // subtraction, 0
console.log(2*2); // multiplication, 4
console.log(2/2); // division, 1
console.log(2**2); // exponentiation, 4 , first value is multiplied by itself second value times.
console.log(2%2); // modulus, 0, remainder of 2/2 , if it is 0 then it is divisible by second value shesh.

let str1 = "Hello";
let str2 = " Priyansh";

console.log(str1 + str2); // string concatenation, Hello Priyansh

// Problem addition
console.log("2" + 1); // string concatenation, 22, because first value is string, so it will convert second value to string and concatenate
console.log(1 + "2"); // string concatenation, 22, because second value is string, so it will convert first value to string and concatenate
console.log("2" + "2"); // string concatenation, 22, both values are string, so it will concatenate
console.log("1" + 2 + 3); // string concatenation, 123, because first value is string, so it will convert second value to string and concatenate
console.log(1 + 2 + "3"); // string concatenation, 33,  because first two values are numbers, so it will add them and then convert to string and concatenate

console.log(3+4*5%3); // 2, because multiplication and modulus has higher precedence than addition, so it will first calculate 4*5%3 = 20%3 = 2, then 3+2 = 5

console.log(+true); // 1, because true is converted to 1
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2+2; // all three variables will have the value 4 But it is not recommended to use this syntax, because it is not readable and can lead to confusion.

let gameCounter = 100;
++gameCounter; // increment operator, gameCounter = gameCounter + 1, so it will be 101
console.log(gameCounter); // 101

gameCounter++;
console.log(gameCounter); // 101, because post increment operator, it will increment the value after this line of code is executed

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion