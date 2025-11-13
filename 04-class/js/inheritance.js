// ✅ INHERITANCE IN JAVASCRIPT (ES5 vs ES6)

// --- Example 1: Using ES5 constructor functions ---
function Animal(legs) {
  this.legs = legs;
}

// Add method to Animal prototype
Animal.prototype.walk = function () {
  console.log("Walking on " + this.legs + " legs");
};

// Bird constructor inherits from Animal
function Bird(legs) {
  // Call the parent constructor (Animal)
  Animal.call(this, legs);
}

// Set up prototype inheritance
Bird.prototype = Object.create(Animal.prototype);
// Fix the constructor reference (should point to Bird, not Animal)
Bird.prototype.constructor = Bird;

// Add a new method to Bird
Bird.prototype.fly = function () {
  console.log("Flying");
};

// Create a new instance
var pigeon = new Bird(2);
pigeon.walk(); // Output: Walking on 2 legs
pigeon.fly();  // Output: Flying


// --- Example 2: Using ES6 classes (simpler and cleaner syntax) ---
class Animal2 {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log(`Walking on ${this.legs} legs`);
  }
}

// Bird2 inherits from Animal2
class Bird2 extends Animal2 {
  constructor(legs, color) {
    super(legs); // Call the parent constructor
    this.color = color;
  }

  fly() {
    console.log("Flying");
  }

  getColor() {
    return this.color;
  }
}

// Create an instance of Bird2
let bird2 = new Bird2(2, "red");
bird2.walk();             // Output: Walking on 2 legs
bird2.fly();              // Output: Flying
console.log(bird2.getColor()); // Output: red


// --- Example 3: Subclass with method overriding and super call ---
class Dog extends Animal2 {
  constructor() {
    super(4); // Pass legs to parent class
  }

  // Override the walk() method
  walk() {
    super.walk(); // Call the parent version of walk()
    console.log("I can walk"); // Add extra behavior
  }
}

// Create instance and test overridden method
let dog = new Dog();
dog.walk();
// Output:
// Walking on 4 legs
// I can walk
