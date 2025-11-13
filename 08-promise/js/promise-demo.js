// Load data from a given URL using Promise
function load(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(`Request failed with status ${this.status}`);
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}

// Alternative modern version using Fetch API
async function loadData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

// Using XMLHttpRequest (original logic)
btn.onclick = function () {
  load("db.json")
    .then((response) => {
      const data = JSON.parse(response);
      console.log(data);
      msg.textContent = data.message;
    })
    .catch((error) => {
      msg.textContent = "Error: " + error;
    });
};

// OR Using the modern Fetch-based loader
/*
btn.onclick = async function () {
  try {
    const data = await loadData("db.json");
    console.log(data);
    msg.textContent = data.message;
  } catch (error) {
    msg.textContent = "Error: " + error.message;
  }
};
*/
