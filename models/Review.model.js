const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  bookCritic: {
    type: String,
    default: "Not filled",
  },
  text: {
    type: String,
    default: "Empty",
  },
  _bookId: {
    type: mongoose.Schema.Types.ObjectId,
    default: "****",
    ref: "Book",
  },
});
const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
