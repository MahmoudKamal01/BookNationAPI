const {Book} = require('../models/book.js');

const deleteBook = async(req,res)=>{
    const id = req.params.id;
    try {
        const book = await Book.findByIdAndDelete(id);
        res.status(200).send("Book deleted!");
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {deleteBook};
