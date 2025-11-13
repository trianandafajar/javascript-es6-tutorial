let authorized = false;

function getUserById2(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      // Throwing inside Promise executor won't be caught by try/catch outside
      // So we should use reject() instead of throw
      reject("Unauthorized access");
      return;
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
