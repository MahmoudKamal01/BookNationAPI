const {Book} = require('../models/book.js');


const createBook = async(req,res)=>{
    try {
        //creating Book
        const book = await Book.create(req.body);
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
}


module.exports = {createBook};
