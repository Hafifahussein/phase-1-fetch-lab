// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
  
// }

// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });



function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => {
      renderBooks(books);
    })
    .catch((error) => {
      console.error("Failed to fetch books:", error);
    });
}

function renderBooks(books) {
  const list = document.getElementById("book-list");
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name;
    list.appendChild(li);
  });
}

// Call fetchBooks when page loads
document.addEventListener("DOMContentLoaded", fetchBooks);
