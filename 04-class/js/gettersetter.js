// ✅ GETTER & SETTER EXAMPLES IN JAVASCRIPT (ES5 vs ES6)

// --- Example 1: Without getters and setters (basic class) ---
class Coba {
  constructor(name) {
    this.name = name;
  }
}

let coba = new Coba("coba");
console.log(coba.name); // Output: coba
coba.name = "coba xxx";
console.log(coba.name); // Output: coba xxx


// --- Example 2: ES5-style constructor functions ---
function Person(name) {
  this.name = name;
}

// Define methods using the prototype
Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.setName = function (name) {
  this.name = name;
};

var jon = new Person("Jon");
console.log(jon.getName()); // Output: Jon
jon.setName("Jon xxx");
jon.name = "Jon xxx111"; // Direct property overwrite (not protected)
console.log(jon.getName()); // Output: Jon xxx111


// --- Example 3: ES6 class with getter-like methods ---
class Person2 {
  constructor(name) {
    this.name = name;
  }

  // Regular methods, not true getters/setters
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

var jon2 = new Person2("Jon");
console.log(jon2.getName()); // Output: Jon
jon2.setName("Jon xxx");
console.log(jon2.getName()); // Output: Jon xxx


// --- Example 4: ES6 class with real getters and setters ---
class Person3 {
  constructor(name) {
    this._name = name; // Use underscore to indicate a "private-like" property
  }

  // Getter method (accessed like a property)
  get name() {
    return this._name;
  }

  // Setter method with validation
  set name(name) {
    name = name.trim();
    if (name.length === 0) {
      throw new Error("Name is empty");
    }
    this._name = name;
  }
}

let jon3 = new Person3("Pojok Code");
console.log(jon3.name); // Output: Pojok Code
jon3.name = "Pojok Code xxx"; // Setter is called automatically
console.log(jon3.name); // Output: Pojok Code xxx


// --- Example 5: Getter in object literal + method chaining ---
let meeting = {
  attendance: [],

  // Add a new attendee and return 'this' for chaining
  add(attendee) {
    console.log(`Add ${attendee} to the meeting`);
    this.attendance.push(attendee);
    return this; // Enables chaining
  },

  // Getter to retrieve the latest added attendee
  get latest() {
    let count = this.attendance.length;
    return count === 0 ? undefined : this.attendance[count - 1];
  },
};

// Chaining multiple add() calls
meeting.add("John").add("Jane").add("Jack");
console.log(`Latest: ${meeting.latest}`); // Output: Latest: Jack
