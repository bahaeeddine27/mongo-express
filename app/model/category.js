const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Entrez le nom du catégorie'],
        unique: [true, 'Cette catégorie existe déjà'],
        trim: true
    },
});

const Category = mongoose.model(Category, categorySchema);

module.exports = Category;