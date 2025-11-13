// Example: Promise.race() — returns the result of the fastest promise

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

Promise.race([p1, p2])
  .then((result) => {
    console.log(`🏁 Fastest result: ${result}`);
  })
  .catch((error) => {
    console.error(`❌ Error: ${error}`);
  });
