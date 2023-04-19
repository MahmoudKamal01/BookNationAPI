const { Review } = require("../models/review.js");

const getAllReviews = async (req, res) => {
  try {
    // Getting all reviews
    const reviews = await Review.find();
    res.status(201).send(reviews);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getReview = async (req, res) => {
  const id = req.params.id;
  try {
    const review = await Review.findById(id);
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};


module.exports = {
  getAllReviews,
};
