// ==============================
// 1️⃣ EVENT HANDLER
// ==============================

const greeting = document.querySelector("#greeting");
const username = document.querySelector("#username");

// ❌ Arrow function tidak punya `this` sendiri,
// jadi `this.value` di sini akan undefined.
username.addEventListener("keyup", () => {
  greeting.textContent = `Hello ${username.value}`;
});

// ✅ Gunakan function biasa agar `this` mengacu ke elemen input
username.addEventListener("keyup", function () {
  greeting.textContent = `Hello ${this.value}`;
});


// ==============================
// 2️⃣ OBJECT METHOD
// ==============================

// ❌ Arrow function tidak cocok untuk object method karena `this` mengacu ke global scope
/*
const counter = {
  count: 0,
  next: () => ++this.count,     // ❌ this bukan milik counter
  current: () => this.count,
};
*/

// ✅ Gunakan method biasa agar `this` mengacu ke objek itu sendiri
const counter = {
  count: 0,
  next() {
    return ++this.count;
  },
  current() {
    return this.count;
  },
};

console.log(counter.next());    // 1
console.log(counter.current()); // 1


// ==============================
// 3️⃣ PROTOTYPE METHOD (ES5 STYLE)
// ==============================

function Counter2() {
  this.count = 0;
}

Counter2.prototype.next = function () {
  return ++this.count;
};

Counter2.prototype.current = function () {
  return this.count;
};

const counter2 = new Counter2();
console.log(counter2.next());    // 1
console.log(counter2.current()); // 1


// ==============================
// 4️⃣ ARGUMENTS OBJECT
// ==============================

// ❌ Arrow function tidak memiliki `arguments`
// const concat = (separator) => {
//   let args = Array.prototype.slice.call(arguments, 1);
//   return args.join(separator);
// };
// console.log(concat("-", "a", "b", "c"));

// ✅ Gunakan function biasa agar bisa akses `arguments`
const concat = function (separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
};

console.log(concat("-", "a", "b", "c")); // Output: a-b-c


// ✅ Alternatif modern pakai rest parameter (ES6)
const concat2 = (separator, ...args) => args.join(separator);
console.log(concat2("/", "apple", "banana", "cherry")); // apple/banana/cherry
