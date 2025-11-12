// Example 1: Basic use of rest parameters
// '...args' collects all arguments into an array
function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a; // add each value
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6)); // Output: 21

// Example 2: Filter only numbers before summing
// Rest parameters let you handle mixed data safely
function sum(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number"; // keep only numbers
    })
    .reduce(function (prev, curr) {
      return prev + curr; // add them up
    });
}

let result = sum(10, "Hi", null, undefined, 25);
console.log(result); // Output: 35

// Example 3: Using rest parameters in an arrow function
// Combines all strings into a single sentence
const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr; // join each word with space
  });
};

let message = combine("JavaScript", "Rest", "Parameters");
console.log(message); // Output: JavaScript Rest Parameters
