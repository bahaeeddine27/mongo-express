const mongoose = require("mongoose");
const validate = require('mongoose-validator');

const nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Le nom de la catégorie doit contenir entre {ARGS[0]} et {ARGS[1]} caractères',
    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: true,
        message: 'Le nom de la catégorie doit contenir uniquement des caractères alphanumériques',
    }),
];

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Entrez le nom de la catégorie'],
        unique: [true, 'Cette catégorie existe déjà'],
        trim: true,
        validate: nameValidator,
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;