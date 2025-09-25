const express = require("express");
const app = express();

const PORT = 3000;

let books = [
  { id: 1, title: "book1" },
  { id: 2, title: "book2" },
  { id: 3, title: "book3" },
  { id: 4, title: "book4" },
  { id: 5, title: "book5" },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

app.post("/books", (req, res) => {
    const newBook = { id: books.length + 1, title: `book${books.length + 1}` };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.patch("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (book) {
    book.title = `updatedBook${book.id}`;
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  } 
});

app.delete("/books/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1);
        res.json(deletedBook[0]);
    } else {
        res.status(404).send("Book not found");
    }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});