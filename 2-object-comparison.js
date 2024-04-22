/*
Exercise 2: Object Comparison
Create a function called `areObjectsEqual` that takes two objects as arguments and returns a boolean.
The function should compare the `name` and `age` properties of the objects to determine if they are equal.
For example, areObjectsEqual({ name: "Alice", age: 25 }, { name: "Alice", age: 25 }) should return true.
*/

function areObjectsEqual(a, b) {
  return a.name === b.name && a.age === b.age;
}

console.log(areObjectsEqual({ name: "Alice", age: 25 }, { name: "Alice", age: 25 }));