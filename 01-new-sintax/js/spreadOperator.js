// Spread Operator in Arrays
// Spread (...) expands elements of an array into another array
const add = [1, 3, 5];
const combine = [2, 4, 6, ...add]; // spread at the end
console.log(combine);

const odd2 = [1, 3, 5];
const combine2 = [...odd2, 2, 4, 6]; // spread at the beginning
console.log(combine2);

const odd3 = [1, 3, 5];
const combine3 = [2, 4, ...odd3, 6]; // spread in the middle
console.log(combine3);

// Rest Parameter in Functions
// Rest (...) collects remaining arguments into an array
function f(a, b, ...args) {
  console.log(args); // args = [3, 4, 5]
}
f(1, 2, 3, 4, 5);

// Spread Operator in Function Calls
// Spread expands an array into individual arguments
function compare(a, b) {
  return a - b;
}
console.log(compare.apply(null, [1, 2])); // old way (ES5)
console.log(compare(...[1, 2])); // new way (ES6)

// Using .push.apply() vs Spread Operator
// Old way to append elements from another array
let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];
[].push.apply(rivers, moreRivers);
console.log(rivers);

// New way using spread
rivers = ["Nile", "Ganges", "Yangte"];
moreRivers = ["Danube", "Amazon"];
rivers.push(...moreRivers);
console.log(rivers);

// Creating a New Array with Spread
// Spread copies elements into a new array
let initialChar = ["A", "B"];
let chars = [...initialChar, "C"];
console.log(chars);

// Merging Two Arrays
// Spread can merge multiple arrays easily
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumber = [...numbers, ...moreNumbers];
console.log(allNumber);

// Copying an Array
// Spread makes a shallow copy of an array
let scores = [80, 70, 90];
let copyArray = [...scores];
console.log(copyArray);

// Using Spread with Strings
// Spread splits a string into individual characters
chars = ["A", ..."BC", "E"];
console.log(chars);
