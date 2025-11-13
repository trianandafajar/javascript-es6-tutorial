// ==========================================================
// 🧩 SYMBOL IN ES6
// ==========================================================

// Symbols create unique values every time they are instantiated.
let s = Symbol("foo");

// Each Symbol is guaranteed to be unique.
console.log(Symbol() === Symbol()); // false

// Symbols can optionally take a description (for debugging).
let firstName = Symbol("firstName");
let lastName = Symbol("lastName");

console.log(firstName, lastName);
console.log(typeof firstName); // "symbol"

// Symbols are primitive values; using `new` with Symbol will throw an error.
// let s2 = new Symbol(); // ❌ TypeError


// ==========================================================
// 🔁 SHARED SYMBOLS USING Symbol.for()
// ==========================================================

// Symbol.for() checks a global symbol registry.
// If the symbol exists, it reuses it; otherwise, it creates a new one.
let ssn = Symbol.for("ssn");
let citizenId = Symbol.for("ssn");

console.log(ssn === citizenId); // true

// Retrieve the key associated with a registered symbol.
console.log(Symbol.keyFor(ssn)); // "ssn"

// If a symbol is not registered globally, Symbol.keyFor() returns undefined.
// console.log(Symbol.keyFor(systemId)); // undefined


// ==========================================================
// 🧱 USING SYMBOLS
// ==========================================================

// 1️⃣ Using Symbol for unique constant values
let statuses = {
  OPEN: Symbol("open"),
  IN_PROGRESS: Symbol("in progress"),
  COMPLETED: Symbol("completed"),
  HOLD: Symbol("hold"),
  CANCELLED: Symbol("cancelled"),
};

let task = {
  setStatus(status) {
    console.log(status);
  },
};

task.setStatus(statuses.OPEN);


// 2️⃣ Using Symbol as an object property key
let status = Symbol("status");

task = {
  [status]: statuses.OPEN,
  description: "Learn ES6 Symbols",
};

console.log(task);
console.log(task[status]); // Access via Symbol key


// ==========================================================
// 🔄 SYMBOL.iterator EXAMPLE
// ==========================================================

// Regular array iteration with for...of uses the internal Symbol.iterator
const numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(num);
}

// Internally, JavaScript retrieves the iterator using Symbol.iterator
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // done: true


// ==========================================================
// 🧰 CUSTOM ITERATOR USING Symbol.iterator
// ==========================================================

// By implementing Symbol.iterator, you can make your own iterable class.
class List {
  constructor() {
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
    return this; // allow method chaining
  }

  // Define a generator method using Symbol.iterator
  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element;
    }
  }
}

const cars = new List();
cars.add("BMW").add("Mercedes").add("Audi");

for (let c of cars) {
  console.log(c);
}


// ==========================================================
// 💱 Symbol.toPrimitive EXAMPLE
// ==========================================================

// Symbol.toPrimitive controls how an object converts to a primitive value.
function Money(amount, currency) {
  this.amount = amount;
  this.currency = currency;
}

Money.prototype[Symbol.toPrimitive] = function (hint) {
  switch (hint) {
    case "string":
      return `${this.amount}${this.currency}`;
    case "number":
      return this.amount;
    default:
      return `${this.amount} ${this.currency}`;
  }
};

const price = new Money(100, "USD");

console.log("Price is: " + price); // "Price is: 100USD"
console.log(+price + 1);           // 101
console.log(String(price));        // "100USD"
