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

const atomicHabbits = new Book("Atomic Habits", "James Clear", 320, false);

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 320, false);

myLibrary.push(HarryPotterPartOne, atomicHabbits, theHobbit);

const bookList = document.getElementById("book-list");

function displayBooks() {
  bookList.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("card");

    bookDiv.innerHTML = `
    <h2 class="book-title">${book.title}</h2>
    <div>
    <p class="author">Author: ${book.author}</p>
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

const addBookButton = document.getElementById("addBookButton");
const hiddenContainer = document.getElementById("hidden-container");

addBookButton.addEventListener("click", () => {
  if (
    hiddenContainer.style.display === "none" ||
    hiddenContainer.style.display === ""
  ) {
    hiddenContainer.style.display = "block"; // Show the form
  } else {
    hiddenContainer.style.display = "none"; // Hide the form
  }
});

function addBook(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").value === "true";

  const newBook = new Book(title, author, pages, isRead);

  myLibrary.push(newBook);

  hiddenContainer.style.display = "none";
  document.getElementById("bookForm").reset();
  document.querySelectorAll("#bookForm input").forEach((input) => {
    input.classList.remove("valid", "invalid");
  });
  displayBooks();
}

document.getElementById("bookForm").addEventListener("submit", addBook);

document.getElementById("cancelButton").addEventListener("click", function () {
  const form = document.getElementById("bookForm");

  // Reset the form fields
  form.reset();

  // Hide the form's container
  document.getElementById("hidden-container").style.display = "none";
});

function toggleRead(index, button) {
  const book = myLibrary[index];
  book.isRead = !book.isRead;

  button.textContent = book.isRead ? "Unread" : "Read";
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

document.getElementById("bookForm").addEventListener("input", (event) => {
  if (event.target.tagName === "INPUT") {
    const input = event.target;
    if (input.checkValidity()) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  }
});

displayBooks();
