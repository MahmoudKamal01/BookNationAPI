const { Router } = require("express");
const reviewRouter = Router();
const reviewController = require("../controllers/reviewController.js");

// Get all reviews
reviewRouter.route("/:bookId/reviews").get(reviewController.getAllReviews);

// Get a review by id
reviewRouter.route("/:bookId/reviews/:id").get(reviewController.getReview);

// Create a review for a book
reviewRouter.route("/:bookId/reviews").post(reviewController.createReview);

// Edit a review by id
reviewRouter.route("/:bookId/reviews/:id").put(reviewController.editReview);

// Delete a review by id
reviewRouter
  .route("/:bookId/reviews/:id")
  .delete(reviewController.deleteReview);

module.exports = {
  reviewRouter,
};
