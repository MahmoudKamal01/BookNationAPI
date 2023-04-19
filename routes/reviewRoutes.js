const { Router } = require("express");
const reviewRouter = Router();
const reviewController = require("../controllers/reviewController.js");

// Get all reviews
reviewRouter.route("/:bookId/reviews").get(reviewController.getAllReviews);

// Create a review for a book
reviewRouter.route("/:bookId/reviews").post(reviewController.createReview);

// Delete a review by id
reviewRouter
  .route("/:bookId/reviews/:id")
  .delete(reviewController.deleteReview);

module.exports = {
  reviewRouter,
};
