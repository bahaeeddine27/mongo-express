const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Entrez votre mail'],
        unique: [true, 'Cet email est déjà utilisé'],
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Respectez la forme']
    },
    password: {
        type: String,
        required: [true, 'Entrez votre MDP']
    },
});

const User = mongoose.model(User, userSchema);

module.exports = User;