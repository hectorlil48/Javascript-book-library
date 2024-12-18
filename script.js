function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const myLibrary = [];

const HarryPotterPartOne = new Book(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  309,
  true
);

const HarryPotterPartTwo = new Book(
  "Harry Potter and the Chamber of Secrets",
  "J.K. Rowling",
  350,
  true
);

const atomicHabbits = new Book("Atomic Habits", "James Clear", 320, false);

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 320, false);

myLibrary.push(
  HarryPotterPartOne,
  HarryPotterPartTwo,
  atomicHabbits,
  theHobbit
);

const bookList = document.getElementById("book-list");

function displayBooks() {
  bookList.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("card");

    bookDiv.innerHTML = `
    <h2 class="book-title">${book.title}</h2>
    <div><p class="author">Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    </div>
    <div class="card-buttons">
    <button onclick="toggleRead(${index}, this)">${
      book.isRead ? "Unread" : "Read"
    }</button>
    <button onclick="deleteBook(${index})">Delete</button>`;

    bookList.appendChild(bookDiv);
  });
}

function toggleRead(index, button) {
  const book = myLibrary[index];
  book.isRead = !book.isRead;

  button.textContent = book.isRead ? "Unread" : "Read";
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

displayBooks();
