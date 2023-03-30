const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
title: {type:String},
author: {type:String},
description: {type:String},
release: {type:Date},
price: {type:Number},
category:{type:String},
})

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

module.exports = {
    Book,
};

