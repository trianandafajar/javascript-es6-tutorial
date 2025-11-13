// ✅ OBJECT CREATION IN JAVASCRIPT (ES5 vs ES6)

// --- Example 1: Creating objects using ES5 constructor functions ---
function Person(name) {
  this.name = name;
}

// Add a method to the prototype
Person.prototype.getName = function () {
  return this.name;
};

// Create an instance using 'new'
var john = new Person("Pojok Code");
console.log(john.getName()); // Output: Pojok Code

// Check instance relationships
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true


// --- Example 2: Creating objects using ES6 class syntax ---
class Person2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// Create a new instance
let code = new Person2("Pojok Code");
console.log(code.getName()); // Output: Pojok Code

// Check instance relationships
console.log(code instanceof Person2); // true
console.log(code instanceof Object);  // true


// --- Important notes when creating classes ---
//
// 1️⃣ Class declarations are **not hoisted**
//     → You must declare a class before using it.
//
// 2️⃣ All code inside a class runs in **strict mode** automatically
//     → 'this' is undefined if you call the constructor without 'new'.
//
// 3️⃣ Classes **must** be instantiated using 'new'
//     → Calling a class constructor as a regular function will throw an error.
//
