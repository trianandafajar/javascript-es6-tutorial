// ✅ Import named exports from lib.js
import { display, display2 } from "./lib.js";

// Alternative (if using default export):
// import disp from "./lib.js";
// disp.display("Hello World!");
// disp.display2("Hello World2!");

// --- Example usage ---
display("Hello World!");   // Displays a message using display()
display2("Hello World 2!"); // Displays a message using display2()
