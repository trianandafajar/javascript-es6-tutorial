// ✅ STATIC METHODS & PROPERTIES IN JAVASCRIPT (ES5 vs ES6)

// --- Example 1: Static method using ES5 constructor function ---
function Person(name) {
  this.name = name;
}

// Instance method (available to all Person instances)
Person.prototype.getName = function () {
  return this.name;
};

// Static method (belongs to the Person constructor itself, not instances)
Person.createAnonymous = function (gender) {
  const name = gender === "male" ? "Mr. Anonymous" : "Mrs. Anonymous";
  return new Person(name);
};

// Call the static method directly from the constructor
var anonymous = Person.createAnonymous("female");
console.log(anonymous.getName()); // Output: Mrs. Anonymous


// --- Example 2: Static method using ES6 class syntax ---
class Person2 {
  constructor(name) {
    this.name = name;
  }

  // Instance method (available to objects created with 'new')
  getName() {
    return this.name;
  }

  // Static method (belongs to the class, not its instances)
  static createAnonymous(gender) {
    const name = gender === "male" ? "Mr. Anonymous" : "Mrs. Anonymous";
    return new Person2(name);
  }
}

// Correct usage: call static method on the class itself
let anonymous2 = Person2.createAnonymous("male");
console.log(anonymous2.getName()); // Output: Mr. Anonymous

// ❌ Incorrect: cannot call static method from an instance
// let person3 = new Person2("Pojok Code");
// person3.createAnonymous("female"); // TypeError


// --- Example 3: Static property and method example ---
class Item {
  // Static property belongs to the class, not to instances
  static count = 0;

  // Static method that returns the current count
  static getCount() {
    return Item.count;
  }
}

console.log(Item.getCount()); // Output: 0


// --- Example 4: Using static property to track total created instances ---
class Item2 {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++; // Increment count every time an instance is created
  }

  // Static property
  static count = 0;

  // Static method to access count
  static getCount() {
    return Item2.count;
  }
}

// Create instances
let pen = new Item2("Pen", 10);
let book = new Item2("Book", 5);

console.log(Item2.getCount()); // Output: 2
