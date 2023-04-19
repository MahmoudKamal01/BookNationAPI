const {Book} = require('../models/book.js');

const getAllBooks = async(req,res)=>{
    try {
        //getting all Books
        const books = await Book.find();
        res.status(201).send(books);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getBook = async(req,res)=>{
    const id = req.params.id;
    try {
        const book = await Book.findById(id);
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
}

const createBook = async(req,res)=>{
    try {
        //creating Book
        const book = await Book.create(req.body);
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
}

const editBook = async(req,res)=>{
    const id = req.params.id;
    try {
        const book = await Book.findByIdAndUpdate(id, req.body);
        res.status(200).send(req.body);
    } catch (error) {
        res.status(400).send(error);
    }
}

///
const deleteBook = async(req,res)=>{
    const id = req.params.id;
    try {
        const book = await Book.findByIdAndDelete(id);
        res.status(200).send("Book deleted!");
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {createBook,deleteBook, getAllBooks,getBook,editBook};
