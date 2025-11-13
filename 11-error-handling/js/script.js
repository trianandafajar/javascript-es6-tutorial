// Example 1: Normal error (synchronous validation)
function getUserById(id) {
  if (typeof id !== "number" || id <= 0) {
    throw new Error("Invalid 'id' argument");
  }

  return new Promise((resolve) => {
    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById("a")
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Caught by .catch: ${err}`));
} catch (error) {
  console.log(`Caught by try/catch: ${error}`);
}


// Example 2: Error thrown inside Promise executor
let authorized = false;

function getUserById2(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      throw new Error("Unauthorized access");
    }

    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById2(10)
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Caught by .catch: ${err}`));
} catch (error) {
  console.log(`Caught by try/catch: ${error}`);
}


// Example 3: Properly rejecting inside Promise
function getUserById3(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject("Rejected: Unauthorized access");
      return;
    }

    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById3(10)
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Caught by .catch: ${err}`));
} catch (error) {
  console.log(`Caught by try/catch: ${error}`);
}


// Example 4: Missing .catch() — unhandled rejection
function getUserById4(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject("Rejected: Unauthorized (no .catch())");
      return;
    }

    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById4(10).then((user) => console.log(user.username));
  console.log("Next process...");
} catch (error) {
  console.log(`Caught by try/catch: ${error}`);
}
