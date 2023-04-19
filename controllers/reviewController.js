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

const createReview = async (req, res) => {
  try {
    // Creating review
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    const validationResult = validateReview(req.body);
    if (validationResult.error) {
      // Validation failed
      const validationErrorMessage = validationResult.error.details[0].message;
      console.log(validationErrorMessage);
      return res.status(400).send(validationErrorMessage);
    }

    const review = new Review({
      userName: req.body.userName,
      comment: req.body.comment,
      rating: req.body.rating,
    });

    review.book = book._id; // Link review to book by reference
    await review.save();

    book.reviews.push(review._id);
    await book.save();

    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};

const editReview = async (req, res) => {
  const id = req.params.id;
  try {
    const review = await Review.findByIdAndUpdate(id, req.body);
    res.status(200).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteReview = async (req, res) => {
  const id = req.params.id;
  try {
    const review = await Review.findByIdAndDelete(id);
    res.status(200).send("Review deleted!");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getAllReviews,
  getReview,
  editReview,
  deleteReview,
};
