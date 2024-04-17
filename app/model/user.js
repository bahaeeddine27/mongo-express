const mongoose = require("mongoose");
const validate = require('mongoose-validator');

const emailValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'L\'email doit contenir entre {ARGS[0]} et {ARGS[1]} caractères',
    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: true,
        message: 'L\'email doit contenir uniquement des caractères alphanumériques',
    }),
    validate({
        validator: 'isEmail',
        message: 'L\'adresse email n\'est pas valide',
    }),
];

const passwordValidator = [
    validate({
        validator: 'matches',
        arguments: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: 'Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule et un chiffre',
    }),
];

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Entrez votre email'],
        unique: [true, 'Cet email est déjà utilisé'],
        lowercase: true,
        trim: true,
        validate: emailValidator,
    },
    password: {
        type: String,
        required: [true, 'Entrez votre mot de passe'],
        validate: passwordValidator,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
