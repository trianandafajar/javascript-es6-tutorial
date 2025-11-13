// Example: Promise.all() — when all promises are resolved
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("✅ The first promise resolved");
    resolve(10);
  }, 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("✅ The second promise resolved");
    resolve(20);
  }, 2000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("✅ The third promise resolved");
    resolve(30);
  }, 3000);
});

Promise.all([p1, p2, p3])
  .then((results) => {
    const total = results.reduce((a, b) => a + b, 0);
    console.log(`📦 Results: [${results.join(", ")}]`);
    console.log(`💰 Total: ${total}`);
  })
  .catch((error) => console.error(`❌ Error: ${error}`));


// Example: Promise.all() — with one rejected promise
const q1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("✅ The first promise resolved");
    resolve(10);
  }, 1000);
});

const q2 = new Promise((_, reject) => {
  setTimeout(() => {
    console.log("❌ The second promise rejected");
    reject("Failed to load data");
  }, 2000);
});

const q3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("✅ The third promise resolved");
    resolve(30);
  }, 3000);
});

Promise.all([q1, q2, q3])
  .then((results) => console.log(`📦 Results: ${results}`))
  .catch((error) => console.error(`🚨 Promise.all() error: ${error}`));
