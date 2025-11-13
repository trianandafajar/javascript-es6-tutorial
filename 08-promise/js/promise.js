// Understanding Promises in JavaScript
// Example: Searching for user data from a list of objects

// --- Example 1: Synchronous function ---
function getUsers() {
  return [
    { userName: "john", email: "johndoe@me.com" },
    { userName: "jane", email: "janedoe@me.com" },
    { userName: "bob", email: "bobdoe@me.com" },
  ];
}

function findUser(userName) {
  const users = getUsers();
  return users.find((user) => user.userName === userName);
}

console.log(findUser("bob")); // Works fine (synchronous)


// --- Example 2: Asynchronous issue (without handling) ---
function getUsersAsyncBroken() {
  let users = [];
  setTimeout(() => {
    users = [
      { userName: "john", email: "johndoe@me.com" },
      { userName: "jane", email: "janedoe@me.com" },
      { userName: "bob", email: "bobdoe@me.com" },
    ];
  }, 1000);
  return users; // Returns empty array before setTimeout runs
}

function findUserBroken(userName) {
  const users = getUsersAsyncBroken();
  return users.find((user) => user.userName === userName);
}

console.log(findUserBroken("bob")); // ❌ undefined (async problem)


// --- Example 3: Using Callbacks (ES5 style) ---
function getUsersWithCallback(callback) {
  setTimeout(() => {
    callback([
      { userName: "john", email: "johndoe@me.com" },
      { userName: "jane", email: "janedoe@me.com" },
      { userName: "bob", email: "bobdoe@me.com" },
    ]);
  }, 1000);
}

function findUserWithCallback(userName, callback) {
  getUsersWithCallback((users) => {
    const user = users.find((user) => user.userName === userName);
    callback(user);
  });
}

findUserWithCallback("bob", (user) => console.log(user)); // ✅ Works


// --- Example 4: Using Promises (ES6 style) ---
let success = true;

function getUsersPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { userName: "john", email: "johndoe@me.com" },
          { userName: "jane", email: "janedoe@me.com" },
          { userName: "bob", email: "bobdoe@me.com" },
        ]);
      } else {
        reject("❌ Request failed");
      }
    }, 1000);
  });
}

function onResolve(users) {
  const user = users.find((user) => user.userName === "bob");
  console.log(user);
}

function onReject(error) {
  console.error(error);
}

// Traditional Promise handling
getUsersPromise().then(onResolve).catch(onReject);


// --- Example 5: Using async/await (modern style) ---
async function findUserAsync(userName) {
  try {
    const users = await getUsersPromise();
    const user = users.find((u) => u.userName === userName);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

findUserAsync("bob"); // ✅ Works with clean async/await syntax
