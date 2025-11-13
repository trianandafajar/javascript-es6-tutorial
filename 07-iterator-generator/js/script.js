// Example of array loop in ES5
let remarks = ["A", "B", "C"];
for (let i = 0; i < remarks.length; i++) {
  console.log(remarks[i]);
}

// Loop using for...of (ES6)
for (let remark of remarks) {
  console.log(remark);
}

// Example of ES6 Iterator
class Sequence {
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

let evenNumbers = new Sequence(2, 10, 2);
for (const num of evenNumbers) {
  console.log(num);
}

// Accessing Symbol.iterator explicitly
let iterator = evenNumbers[Symbol.iterator]();
let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

// Iterator with return() method for cleanup
class Sequence2 {
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
      return: () => {
        console.log("Cleaning up...");
        return { value: undefined, done: true };
      },
    };
  }
}

let oddNumbers = new Sequence2(1, 10, 2);
for (const num of oddNumbers) {
  if (num > 7) break;
  console.log(num);
}
