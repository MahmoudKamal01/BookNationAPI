const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  description: { type: String },
  release: { type: Date },
  price: { type: Number },
  category: { type: String },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

module.exports = {
  Book,
};
