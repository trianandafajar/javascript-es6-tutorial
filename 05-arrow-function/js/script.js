// ✅ FUNCTION VS ARROW FUNCTION IN JAVASCRIPT

// --- Example 1: Basic function that returns a value (ES5 style)
let add = function (x, y) {
  return x + y;
};
console.log(add(5, 10)); // Output: 15

// --- Example 2: Arrow function (implicit return)
let add2 = (x, y) => x + y;
console.log(add2(5, 10)); // Output: 15

// --- Example 3: Arrow function with explicit return (same as normal function)
let add3 = (x, y) => {
  return x + y;
};
console.log(add3(5, 10)); // Output: 15


// --- Example 4: Using functions in array methods
let numbers = [4, 2, 1, 3, 5];

// Regular function
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// Arrow function (shorter syntax)
let numbers2 = [4, 2, 1, 3, 5];
numbers2.sort((a, b) => b - a);
console.log(numbers2); // Output: [5, 4, 3, 2, 1]


// --- Example 5: Arrow function with map()
let names = ["john", "mac", "peter"];
let lengths = names.map((name) => name.length);
console.log(lengths); // Output: [4, 3, 5]


// --- Example 6: Returning object literals
// Use parentheses () to return an object directly
let setColor = (color) => ({ value: color });
console.log(setColor("red")); // Output: { value: "red" }


// --- Example 7: Arrow functions and 'this' context

// ES5: must store reference to 'this' using 'self'
function Car() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    let self = this;
    setTimeout(function () {
      console.log(self.speed); // Works because we used 'self'
    }, 1000);
  };
}

let car = new Car();
car.speedUp(10); // Output after 1s: 10


// ES6: arrow function automatically binds 'this' to outer scope
function Car2() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => console.log(this.speed), 1000);
  };
}

let car2 = new Car2();
car2.speedUp(20); // Output after 1s: 20


// --- Example 8: Arrow functions have no 'prototype'
function dump(message) {
  console.log(message);
}

console.log("dump has prototype =", dump.hasOwnProperty("prototype")); // true

let dump2 = (message) => console.log(message);
console.log("dump2 has prototype =", dump2.hasOwnProperty("prototype")); // false
