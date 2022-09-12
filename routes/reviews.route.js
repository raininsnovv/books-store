const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");
const router = Router();
router.post("/reviews", reviewsController.addReview);
router.delete("/reviews/:id", reviewsController.deleteReview);
router.get("/reviews/:id", reviewsController.getAllReviewsByBook);
router.get("/reviews", reviewsController.getAllReviews);
module.exports = router;
