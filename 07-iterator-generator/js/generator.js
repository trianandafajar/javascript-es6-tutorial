// ==========================================================
// ⚙️ JAVASCRIPT GENERATORS
// ==========================================================
//
// In JavaScript, regular functions execute following the
// run-to-completion model. They cannot pause mid-execution
// and then resume later.
// Generators solve that limitation.
//
// ----------------------------------------------------------
// 1️⃣ Regular function example
// ----------------------------------------------------------

function foo() {
  console.log("I");
  console.log("Cannot");
  console.log("Pause");
}

foo(); // Executes fully without interruption


// ----------------------------------------------------------
// 2️⃣ Basic Generator Function
// ----------------------------------------------------------
//
// Generator functions are declared with an asterisk (*) 
// and can pause execution using the `yield` keyword.

function* generate() {
  console.log("Invoked 1st time");
  yield 1;
  console.log("Invoked 2nd time");
  yield 2;
}

// Calling the generator does NOT run the function immediately
let gen = generate();
console.log(gen); // returns an iterator object

// The first .next() starts execution until the first yield
let result = gen.next();
console.log(result); // { value: 1, done: false }

// The generator can then be iterated further
for (const value of gen) {
  console.log(value); // logs 2
}


// ----------------------------------------------------------
// 3️⃣ Infinite Generator Example
// ----------------------------------------------------------
//
// This generator yields an infinite sequence of numbers.

function* forever() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

let f = forever();
console.log(f.next()); // { value: 0, done: false }
console.log(f.next()); // { value: 1, done: false }
console.log(f.next()); // { value: 2, done: false }
console.log(f.next()); // { value: 3, done: false }
console.log(f.next()); // { value: 4, done: false }


// ----------------------------------------------------------
// 4️⃣ Using Symbol.iterator Without Generator
// ----------------------------------------------------------
//
// Here we manually implement an iterator by returning an object
// with a `next()` method.

class Sequence3 {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }

  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;

    return {
      next: () => {
        if (nextIndex <= this.end) {
          const result = { value: nextIndex, done: false };
          nextIndex += this.interval;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
    };
  }
}

const oddNumber = new Sequence3(1, 10, 2);
for (const value of oddNumber) {
  console.log(value); // 1, 3, 5, 7, 9
}


// ----------------------------------------------------------
// 5️⃣ Using Generator Function to Simplify Iteration
// ----------------------------------------------------------
//
// Using a generator makes iterator logic more concise and readable.

class Sequence4 {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }

  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i += this.interval) {
      yield i;
    }
  }
}

const oddNumber2 = new Sequence4(1, 10, 2);
for (const value of oddNumber2) {
  console.log(value); // 1, 3, 5, 7, 9
}
// ----------------------------------------------------------