const { Router } = require("express");
const reviewRouter = Router();
const reviewController = require("../controllers/reviewController.js");

// Get all reviews
reviewRouter.route("/:bookId/reviews").get(reviewController.getAllReviews).post(reviewController.createReview);

// Get a review by id
reviewRouter.route("/:bookId/reviews/:id").get(reviewController.getReview).put(reviewController.editReview).delete(reviewController.deleteReview);


module.exports = {
  reviewRouter,
};
