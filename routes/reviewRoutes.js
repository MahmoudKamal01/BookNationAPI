const { Router } = require("express");
const reviewRouter = Router();
const reviewController = require("../controllers/reviewController.js");

// Get all reviews
reviewRouter.route("/:bookId/reviews").get(reviewController.getAllReviews);
// Get a review by id
reviewRouter.route("/:bookId/reviews/:id").get(reviewController.getReview);
// Edit a review by id
reviewRouter.route("/:bookId/reviews/:id").put(reviewController.editReview);
module.exports = {
  reviewRouter,
};
