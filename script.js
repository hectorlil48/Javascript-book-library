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
