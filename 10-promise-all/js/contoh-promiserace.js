// Constants
const TIMEOUT = 500;
const DATA_LOAD_TIME = 5000;

// Simulate fetching data from a server
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const message = "Promise.race() Demo";
      resolve(message);
    }, DATA_LOAD_TIME);
  });
}

// Display fetched content
function showContent(message) {
  document.querySelector("#message").textContent = message;
}

// Create a timeout promise that rejects after TIMEOUT ms
function timeout() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Request timed out")), TIMEOUT);
  });
}

// Show and hide loading indicator
function showLoadingIndicator() {
  document.querySelector("#loader").className = "loader";
}

function hideLoadingIndicator() {
  document.querySelector("#loader").className = "";
}

// Reset UI state
function reset() {
  hideLoadingIndicator();
  showContent("");
}

// Handle button click event
const btn = document.querySelector("#btnGet");
btn.addEventListener("click", () => {
  console.log("Running Promise.race() demo...");

  // Reset UI
  reset();

  // Compete between data loading and timeout
  Promise.race([
    getData().then(showContent).then(hideLoadingIndicator),
    timeout(),
  ])
    .catch((error) => {
      console.warn("Error:", error.message);
      showLoadingIndicator();
    });
});
