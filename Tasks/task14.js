function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  let book1 = new Book("WORLD", "George Orwell", 1949);
  console.log(book1);
  