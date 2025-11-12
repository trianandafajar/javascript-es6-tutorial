// Constants in JavaScript
const PI = 3.14;
const API_URL = "https://jsonplaceholder.typicode.com";

// Constant object
const user = { name: "Pojok Code", age: 30 };

// Although 'user' is declared with const, 
// we can still modify its properties.
user.age = 31;
console.log(user);

// Constant array
const colors = ["red", "green", "blue"];

// We can add new elements to a const array.
colors.push("yellow");
console.log(colors);
