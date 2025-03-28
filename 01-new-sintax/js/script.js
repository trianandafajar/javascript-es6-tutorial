console.log("01------------------contoh var ------------------");
var x = 10;
console.log(x);
if (true) {
  var x = 20;
  console.log(x);
}
console.log(x);

console.log("01------------------contoh let ------------------");
let y = 10;
console.log(y);
if (true) {
  let y = 20;
  console.log(y);
}
console.log(y);

console.log("02-----------var scope ---------------");
for (var i = 0; i < 5; i++) {
  console.log("inner loop " + i);
}
console.log("outer loop " + i);

for (let j = 0; j < 5; j++) {
  console.log("inner loop " + j);
}
// console.log("outer loop " + j); // Akan error karena let hanya berlaku di dalam blok

console.log("03-----------let global properties ---------------");
var counter = 1;
console.log("ini var " + window.counter);

let jumlah = 1;
console.log("ini let " + window.jumlah); // Undefined

console.log("04-----------rediclare variable ---------------");
var count = 10;
var count;
console.log("contoh var " + count);

// let jum = 10;
// let jum; // Akan error karena let tidak bisa dideklarasikan ulang

console.log("05-----------Spread & Rest Operator ---------------");
const add = [1, 3, 5];
const combine = [2, 4, 6, ...add];
console.log(combine);

function f(a, b, ...args) {
  console.log(args);
}
f(1, 2, 3, 4, 5);

const odd2 = [1, 3, 5];
const combine2 = [...odd2, 2, 4, 6];
console.log(combine2);

const odd3 = [1, 3, 5];
const combine3 = [2, 4, ...odd3, 6];
console.log(combine3);

console.log("06-----------Function Apply vs Spread Operator ---------------");
function compare(a, b) {
  return a - b;
}
let result = compare.apply(null, [1, 2]);
console.log(result);

let result2 = compare(...[1, 2]);
console.log(result2);

console.log("07-----------Array Manipulation with Spread ---------------");
let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];
[].push.apply(rivers, moreRivers);
console.log(rivers);

rivers = ["Nile", "Ganges", "Yangte"];
moreRivers = ["Danube", "Amazon"];
rivers.push(...moreRivers);
console.log(rivers);

let initialChar = ["A", "B"];
let chars = [...initialChar, "C"];
console.log(chars);

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumber = [...numbers, ...moreNumbers];
console.log(allNumber);

let scores = [80, 70, 90];
let copyArray = [...scores];
console.log(copyArray);

chars = ["A", ..."BC", "E"];
console.log(chars);