// Using for...of loop with an array
let scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for (let score of scores) {
  console.log(score + 5);
}

// Using const inside the loop
for (const score of scores) {
  console.log(score + 5);
}

// Using for...of with .entries() to get both index and value
let colors = ["red", "green", "blue"];
for (const [index, color] of colors.entries()) {
  console.log(index, color);
}

// Using for...of with object destructuring
const ratings = [
  { user: "jon", score: 3 },
  { user: "sarah", score: 4 },
  { user: "bob", score: 5 },
  { user: "lisa", score: 1 },
];

let sum = 0;
for (const { score } of ratings) {
  sum += score;
}
console.log(sum); // Output: 13

// Using for...of with Map objects
colors = new Map();
colors.set("red", "#FF0000");
colors.set("green", "#00FF00");
colors.set("blue", "#0000FF");

for (let color of colors) {
  console.log(color);
}
// Output: [ 'red', '#FF0000' ], etc.

// Difference between for...in and for...of
scores = [10, 20, 30];
scores.message = "Hi";

// for...in loops over property names (indexes + custom properties)
for (let scor in scores) {
  console.log(scor);
}
// Output: 0, 1, 2, message

// for...of loops over array values only
for (let scor of scores) {
  console.log(scor);
}
// Output: 10, 20, 30
