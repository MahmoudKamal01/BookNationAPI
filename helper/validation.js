const Joi = require('joi');

function validateBook(book) {
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        author: Joi.string().min(3).required(),
        description:Joi.string(),
        release:Joi.date(),
        price: Joi.number().min(0).required(),
        category: Joi.string()
    });

    return schema.validate(book);
}

module.exports = {
    validateBook
};
