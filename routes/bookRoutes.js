const { Router } = require('express');
const bookRouter = Router()

const bookController = require('../controllers/bookController.js');

bookRouter.route('/').get(bookController.getAllBooks).post(bookController.createBook);
bookRouter.route('/:id').delete(bookController.deleteBook);


module.exports = {
    bookRouter
};
