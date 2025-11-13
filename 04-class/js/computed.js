// ✅ COMPUTED PROPERTY NAMES IN OBJECTS AND CLASSES

// Variables used inside computed property names
const age = 25;
const name = "Pcode";

// --- Example 1: Computed property keys in an object ---
const person = {
  // Use template literals to dynamically set property names
  [`age-${age}`]: "twenty five",

  // You can also create dynamic method names
  [`greeting-${name}`]: function () {
    return `Hello ${name}`;
  },
};

// Accessing properties with dynamic keys
console.log(person["age-25"]); // Output: twenty five
console.log(person["greeting-Pcode"]()); // Output: Hello Pcode


// --- Example 2: Computed property names in a class getter ---
let nama = "fullName";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Using a computed property name for a getter method
  get [nama]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create a new instance and call the computed getter
let person2 = new Person("Pojok", "Code");
console.log(person2.fullName); // Output: Pojok Code
