const { Router } = require("express");
const reviewRouter = Router();
const reviewController = require("../controllers/reviewController.js");

// Get all reviews
reviewRouter.route("/:bookId/reviews").get(reviewController.getAllReviews);

// Create a review for a book
reviewRouter.route("/:bookId/reviews").post(reviewController.createReview);

module.exports = {
  reviewRouter,
};
