// Callback Hell in JavaScript
// "Callback Hell" occurs when multiple nested callbacks create deep, unreadable code (a pyramid structure).

// Example of callback hell using dummy async functions

function getData(callback) {
  setTimeout(() => {
    const data = Math.random();
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  const result = data * 10;
  callback(result);
}

function displayResult(result, callback) {
  console.log("Result:", result);
  callback();
}

// Classic callback hell structure
getData((data) => {
  console.log("Data:", data);
  processData(data, (result) => {
    displayResult(result, () => {
      console.log("Done...");
    });
  });
});


// --- Refactored Version Using Promises (ES6) ---
function getDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Math.random();
      resolve(data);
    }, 1000);
  });
}

function processDataPromise(data) {
  return new Promise((resolve) => {
    const result = data * 10;
    resolve(result);
  });
}

function displayResultPromise(result) {
  return new Promise((resolve) => {
    console.log("Result:", result);
    resolve();
  });
}

// Promise chaining (cleaner than nested callbacks)
getDataPromise()
  .then((data) => {
    console.log("Data:", data);
    return processDataPromise(data);
  })
  .then((result) => displayResultPromise(result))
  .then(() => console.log("Done..."))
  .catch((error) => console.error("Error:", error));


// --- Modern Version Using async/await ---
async function runProcess() {
  try {
    const data = await getDataPromise();
    console.log("Data:", data);

    const result = await processDataPromise(data);
    await displayResultPromise(result);

    console.log("Done...");
  } catch (error) {
    console.error("Error:", error);
  }
}

runProcess();
