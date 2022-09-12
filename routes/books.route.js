const { Router } = require("express");
const { booksConroller } = require("../controllers/books.controller");

const router = Router();

router.post("/books", booksConroller.addBook);

router.delete("/books/:id", booksConroller.deleteBook);

router.patch("/books/:id", booksConroller.upgradeBook);

router.get("/books/:id", booksConroller.getBookById);

router.get("/books", booksConroller.getAllBooks);

router.get("/books/genres/:id", booksConroller.getBooksByGenre);

module.exports = router;
