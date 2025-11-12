// Function without default parameter
function say(message) {
  console.log(message);
}
say(); // Output: undefined

// Function with manual default parameter check (pre-ES6 style)
function say2(message) {
  message = typeof message !== "undefined" ? message : "Hello";
  console.log(message);
}
say2(); // Output: Hello

// Function using ES6 default parameters
function say3(message = "Hello") {
  console.log(message);
}
say3(); // Output: Hello
say3("hello 2"); // Output: hello 2
say3(undefined); // Output: Hello

// Function with multiple default parameters
function createDiv(
  height = "100px",
  width = "100px",
  border = "1px solid red"
) {
  const div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.append(div);
  return div;
}

console.log(createDiv());
console.log(createDiv(undefined, undefined, "5px solid blue"));

// Function using a default array parameter
function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}
console.log(put("Toy Car")); // ["Toy Car"]
console.log(put("Toy Bike")); // ["Toy Bike"]

// Function throwing an error when argument is missing
function requireArg() {
  throw new Error("No arguments");
}

// Using a function call as a default value
function add(x = requireArg(), y = requireArg()) {
  return x + y;
}
console.log(add(1, 2)); // Output: 3
console.log(add(1)); // Throws Error: No arguments
