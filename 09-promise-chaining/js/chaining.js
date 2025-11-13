// PROMISE CHAINING
// Promise chaining allows sequential execution where the output of one operation
// becomes the input of the next.

// Basic example of promise chaining
let p = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 300);
});

p.then((result) => {
  console.log(result);
  return result * 2;
})
  .then((result) => {
    console.log(result);
    return result * 3;
  })
  .then((result) => {
    console.log(result);
    return result * 4;
  });


// Example of multiple .then() calls on the same Promise
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 300);
});

p2.then((result) => {
  console.log(result);
  return result * 2;
});

p2.then((result) => {
  console.log(result);
  return result * 3;
});

p2.then((result) => {
  console.log(result);
  return result * 4;
});

// Notice that each `.then()` above executes independently — not sequentially.


// Example: chaining with Promises returned inside `.then()`
let p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 300);
});

p3.then((result) => {
  console.log(result);
  return new Promise((resolve) => {
    setTimeout(() => resolve(result * 2), 300);
  });
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 3), 300);
    });
  })
  .then((result) => console.log(result));


// Example: Sequential asynchronous operations using Promise chaining
function getUser(userId) {
  return new Promise((resolve) => {
    console.log("Fetching user from database...");
    setTimeout(() => {
      resolve({ userId, userName: "admin" });
    }, 1000);
  });
}

function getService(user) {
  return new Promise((resolve) => {
    console.log(`Fetching services for ${user.userName} from API...`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 3000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve) => {
    console.log(`Calculating service cost for ${services.join(", ")}`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 2000);
  });
}

// Promise chaining
getUser(100)
  .then(getService)
  .then(getServiceCost)
  .then((cost) => console.log("Total service cost:", cost))
  .catch((error) => console.error("Error:", error));


// --- Modern Version Using async/await ---
async function runAsyncFlow() {
  try {
    const user = await getUser(100);
    const services = await getService(user);
    const cost = await getServiceCost(services);
    console.log("Total service cost (async/await):", cost);
  } catch (error) {
    console.error("Error:", error);
  }
}

runAsyncFlow();
