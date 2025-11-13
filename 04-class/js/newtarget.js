// ✅ CLASS INSTANTIATION AND new.target EXAMPLE IN JAVASCRIPT

class Shape {
  constructor(name) {
    // Ensure the class is instantiated using 'new'
    if (!new.target) {
      throw new TypeError("Shape must be instantiated using the 'new' keyword");
    }

    // Prevent direct instantiation of the abstract class (optional behavior)
    if (new.target === Shape) {
      throw new TypeError("Cannot instantiate abstract class 'Shape' directly");
    }

    this.name = name;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    // Call the parent constructor
    super(name);
    this.radius = radius;
  }
}

// ✅ Correct instantiation via subclass
const circle = new Circle("Circle", 10);
console.log(circle); // Output: Circle { name: 'Circle', radius: 10 }

// ❌ Direct instantiation of Shape (throws an error)
try {
  const square = new Shape("Square");
  console.log(square);
} catch (error) {
  console.error(error.message); // Output: Cannot instantiate abstract class 'Shape' directly
}

// ❌ Calling class without 'new' (throws an error)
try {
  Shape("Circle");
} catch (error) {
  console.error(error.message); // Output: Shape must be instantiated using the 'new' keyword
}
