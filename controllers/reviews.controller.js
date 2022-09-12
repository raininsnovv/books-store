const Review = require("../models/Review.model");

module.exports.reviewsController = {
  addReview: async (req, res) => {
    try {
      const { bookCritic, text, _bookId } = req.body;
      const review = await Review.create({
        bookCritic,
        text,
        _bookId,
      });
      return res.json(revies);
    } catch (e) {
      return res.json(e.message);
    }
  },
  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndDelete(req.params.id);
      return res.json("Review deleted");
    } catch (error) {
      return res.json(error.message);
    }
  },
  getAllReviewsByBook: async (req, res) => {
    try {
      const reviews = await Review.find({ _bookId: req.params.id }).populate(
        "_bookId"
      );
      return res.json(reviews);
    } catch (e) {
      return res.json(e.message);
    }
  },
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find({});
      return res.json(reviews);
    } catch (e) {
      return res.json(e.message);
    }
  },
};
