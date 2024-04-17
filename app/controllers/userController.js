const User = require('../model/user.js');

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new User({ email, password });
        const validationError = newUser.validateSync();
        if (validationError) {
            return res.status(400).json({ message: validationError.message });
        }
        await newUser.save();
        res.status(201).json({ message: "Inscription réussie.", user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Cet utilisateur n'existe pas." });
        }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Mot de passe incorrect." });
        }
        res.status(200).json({ message: "Connexion réussie.", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
