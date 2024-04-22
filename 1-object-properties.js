/*
Exercise 1: Object Properties
Create a function called `createMessage` that takes an object with `name` and `age` properties as an argument.
The function should return a string in the format "name is age years old."
For example, createMessage({ name: "Alice", age: 25 }) should return "Alice is 25 years old."
*/

function createMessage(person) {
  return `${person.name} is ${person.age} years old.`;
}

console.log(createMessage({ name: "Alice", age: 25 })); // "Alice is 25 years old."
console.log(createMessage({ name: "Bob", age: 40 })); // "Bob is 40 years old."