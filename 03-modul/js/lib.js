// ✅ Utility functions for displaying messages on the page

/**
 * Creates and appends a new <div> element with the provided message.
 * @param {string} message - The message text to display in the DOM.
 */
function display(message) {
  const el = document.createElement("div");
  el.textContent = message; // safer and preferred over innerText for consistency
  document.body.appendChild(el);
}

/**
 * Same functionality as display(), kept for demonstration or future variation.
 * @param {string} message - The message text to display.
 */
function display2(message) {
  const el = document.createElement("div");
  el.textContent = message;
  document.body.appendChild(el);
}

// Named exports (recommended for modular ES6 usage)
export { display, display2 };

// Alternative default export (commented out for reference):
// export default { display, display2 };
