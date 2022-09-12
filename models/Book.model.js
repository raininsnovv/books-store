const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    default: "Not filled",
  },
  _authorId: {
    ref: "Author",
    type: mongoose.Schema.Types.ObjectId,
    default: "****",
  },
  _genreId: {
    ref: "Genre",
    type: mongoose.Schema.Types.ObjectId,
    default: "****",
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
