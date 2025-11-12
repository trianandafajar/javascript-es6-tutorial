console.log("01------------------Example: var ------------------");
var x = 10;
console.log(x); // Output: 10
if (true) {
  var x = 20; // var is function-scoped, not block-scoped
  console.log(x); // Output: 20
}
console.log(x); // Output: 20 (same variable outside the block)

console.log("01------------------Example: let ------------------");
let y = 10;
console.log(y); // Output: 10
if (true) {
  let y = 20; // let is block-scoped
  console.log(y); // Output: 20 (different variable inside block)
}
console.log(y); // Output: 10 (original variable unchanged)

console.log("02-----------var scope ---------------");
for (var i = 0; i < 5; i++) {
  console.log("inner loop " + i);
}
console.log("outer loop " + i); // i is still accessible (var is not block-scoped)

for (let j = 0; j < 5; j++) {
  console.log("inner loop " + j);
}
// console.log("outer loop " + j); // Error: j is not defined (let is block-scoped)

console.log("03-----------let and global properties ---------------");
var counter = 1;
console.log("var example: " + window.counter); // var attaches to window object

let jumlah = 1;
console.log("let example: " + window.jumlah); // undefined (let doesn’t attach to window)

console.log("04-----------Redeclare variable ---------------");
var count = 10;
var count; // var can be redeclared
console.log("var example: " + count);

// let jum = 10;
// let jum; // Error: let cannot be redeclared in the same scope

console.log("05-----------Spread & Rest Operator ---------------");
// Spread operator expands array elements
const add = [1, 3, 5];
const combine = [2, 4, 6, ...add];
console.log(combine); // [2, 4, 6, 1, 3, 5]

// Rest operator collects extra arguments into an array
function f(a, b, ...args) {
  console.log(args); // [3, 4, 5]
}
f(1, 2, 3, 4, 5);

const odd2 = [1, 3, 5];
const combine2 = [...odd2, 2, 4, 6];
console.log(combine2); // [1, 3, 5, 2, 4, 6]

const odd3 = [1, 3, 5];
const combine3 = [2, 4, ...odd3, 6];
console.log(combine3); // [2, 4, 1, 3, 5, 6]

console.log("06-----------Function Apply vs Spread Operator ---------------");
// Using apply()
function compare(a, b) {
  return a - b;
}
let result = compare.apply(null, [1, 2]);
console.log(result); // -1

// Using spread (modern syntax)
let result2 = compare(...[1, 2]);
console.log(result2); // -1 (same result, cleaner syntax)

console.log("07-----------Array Manipulation with Spread ---------------");
// Old way using apply()
let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];
[].push.apply(rivers, moreRivers);
console.log(rivers); // ["Nile", "Ganges", "Yangte", "Danube", "Amazon"]

// New way using spread
rivers = ["Nile", "Ganges", "Yangte"];
moreRivers = ["Danube", "Amazon"];
rivers.push(...moreRivers);
console.log(rivers);

// Add element to array
let initialChar = ["A", "B"];
let chars = [...initialChar, "C"];
console.log(chars); // ["A", "B", "C"]

// Merge two arrays
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumber = [...numbers, ...moreNumbers];
console.log(allNumber); // [1, 2, 3, 4]

// Copy array
let scores = [80, 70, 90];
let copyArray = [...scores];
console.log(copyArray); // [80, 70, 90]

// Spread characters in string into array
chars = ["A", ..."BC", "E"];
console.log(chars); // ["A", "B", "C", "E"]
