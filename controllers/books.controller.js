const Book = require("../models/Book.model");

module.exports.booksConroller = {
  addBook: async (req, res) => {
    try {
      const { name, _authorId, _genreId } = req.body;
      const book = await Book.create({
        name,
        _authorId,
        _genreId,
      });
      return res.json(book);
    } catch (e) {
      return res.json(e.message);
    }
  },
  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      return res.json("Book deleted");
    } catch (e) {
      return res.json(e.message);
    }
  },
  upgradeBook: async (req, res) => {
    try {
      const { name, _authorId, _genreId } = req.body;
      const book = await Book.findByIdAndUpdate(req.params.id, {
        name,
        _authorId,
        _genreId,
      });
      return res.json(book);
    } catch (e) {
      return res.json(e.message);
    }
  },
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate(
        "_authorId _genreId",
        "name"
      );
      return res.json(book);
    } catch (e) {
      return res.json(e.message);
    }
  },
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find().populate("_authorId _genreId", "name");
      return res.json(books);
    } catch (e) {
      return res.json(e.message);
    }
  },
  getBooksByGenre: async (req, res) => {
    try {
      const books = Book.find({ _genreId: req.params.id }).populate(
        "_authorId _genreId",
        "name"
      );
      return res.json(books);
    } catch (e) {
      return res.json(e.message);
    }
  },
};
