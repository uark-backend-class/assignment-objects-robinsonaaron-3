/*
Exercise 3: Object Array Filtering
Create an array of objects representing books. Each book should have a `title`, `author`, and `year` property.
Write a function called `filterBooks` that takes an array of books as an argument and returns a new array containing only books published in the year 1950 or later.
For example, if the input array is:
[
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 }
]
The function should return:
[
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 }
]
*/

function filterBooks(books) {
  let modernBooks = [];

  for (let i = 0; i < books.length; i++) {
    if (books[i].year >= 1950) {
      modernBooks.push(books[i]);
    }
  }

  return modernBooks;
}

let library = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 }
];

console.log(filterBooks(library));

// library.filter(book => book.age >= 1950);