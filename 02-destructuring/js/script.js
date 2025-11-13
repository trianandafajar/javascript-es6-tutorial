// ✅ DESTRUCTURING ARRAY TUTORIAL IN JAVASCRIPT

// Function returning an array of scores
function getScore() {
  return [70, 80, 90];
}

// --- Without destructuring ---
let score = getScore();
let x = score[0],
  y = score[1],
  z = score[2];

console.log(x, y, z); // Output: 70 80 90


// --- Basic array destructuring ---
let a, b, c, d, e;

// Extract values directly into variables
[a, b, c] = getScore();
console.log(a, b, c); // Output: 70 80 90

// If there are more variables than values, the extra ones will be 'undefined'
[a, b, c, d, e] = getScore();
console.log(a, b, c, d, e); // Output: 70 80 90 undefined undefined

// If there are fewer variables, only the first values are extracted
[a, b] = getScore();
console.log(a, b); // Output: 70 80


// --- Using the rest operator (...) ---
// The rest operator gathers remaining elements into a new array
let [i, ...rest] = getScore();
console.log(i, rest); // Output: 70 [80, 90]


// --- Handling undefined values manually ---
let items = getScore();
let ke4 = items[3] != undefined ? items[3] : 0; // Ternary check for 4th element
ke4 = items[4] || 0; // OR operator as fallback
console.log(ke4); // Output: 0


// --- Default values in destructuring ---
// You can assign default values to prevent 'undefined'
[a, b, c, d = 0, e = 0] = getScore();
console.log(a, b, c, d, e); // Output: 70 80 90 0 0


// --- Using fallback with null or undefined ---
// If the array is null or empty, defaults are used
[a = 10, b = 20] = null || [];
console.log(a, b); // Output: 10 20


// --- Nested destructuring ---
// Function returning nested arrays
function getProfile() {
  return ["Pojok", "code", ["red", "blue", "blue"]];
}

// Extract nested values directly
let [firstName, lastName, [color1, color2, color3]] = getProfile();
console.log(firstName, lastName, color1, color2, color3);
// Output: Pojok code red blue blue


// --- Swapping variables easily ---
a = 10;
b = 20;
[a, b] = [b, a];
console.log(a, b); // Output: 20 10


// --- Returning multiple values from a function ---
// This function returns sum, multiplication, and division
function start(a, b) {
  return [a + b, a * b, a / b];
}

// Destructure returned values
let [sum, mul, div] = start(10, 20);
console.log(sum, mul, div); // Output: 30 200 0.5
