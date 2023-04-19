const { Router } = require("express");
const reviewRouter = Router();
const reviewController = require("../controllers/reviewController.js");

// Get all reviews
reviewRouter.route("/:bookId/reviews").get(reviewController.getAllReviews);

module.exports = {
  reviewRouter,
};
