const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  userName: { type: String },
  comment: { type: String },
  rating: { type: Number },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  Review,
};
