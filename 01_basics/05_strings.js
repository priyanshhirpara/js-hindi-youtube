const name = "Priyansh"; // String
const repo_count = 5; // Number

console.log(name + repo_count + 'is')
console.log(`Hello, my name is ${name} and I have ${repo_count} repositories.`); // Template literals

const gameName = new String("Cricket"); // String object
console.log(gameName[2]); // String object
console.log(gameName.__proto__); // String prototype
console.log(gameName.length); // Length of the string object
console.log(gameName.toUpperCase()); // Convert to uppercase
console.log(gameName.charAt(2)); // Character at index 2
const newString = gameName.substring(0, 3); // Substring from index 0 to 3
console.log(newString); // Output: Cri

const anotherString = gameName.slice(-7, 4); // Slice from index -7 to 4
console.log(anotherString); // Output: Cri


const newStringOne = "    priyansh.  "; // String with spaces
console.log(newStringOne);
console.log(newStringOne.trim()); // Trim spaces from both ends

const url = "https://priyansh.com/priyansh%20hirpara"
console.log(url.replace("%20", "-")); // Replace %20 with space
console.log(url.includes("priyansh")); // Check if the string includes "priyansh"

let str = "Hello, Priyansh!"; // String with double quotes
console.log(str.split(" ")); // Split the string into an array of characters