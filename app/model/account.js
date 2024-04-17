const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: [true, 'Entrez la banque']
    },
    customName: {type: String},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Entrez l utilisateur']
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;