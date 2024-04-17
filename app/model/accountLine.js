const mongoose = require("mongoose");

const accountLineSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, 'Entrez votre libellé']
    },
    type: {
        type: String,
        required: [true, 'Entrez le type de transaction'],
        enum: {
            values: ['credit', 'debit'],
            message: '"credit" ou "debit"'
        }
    },
    amount: {
        type: Number,
        required: [true, 'Entrez le montant'],
        min: 0
    },
    date: {
        type: Date,
        required: [true, 'Entrez la date']
    },
    method: {
        type: String,
        required: [true, 'Entrez la méthode de paiement'],
        enum: ['CASH', 'CB', 'VIREMENT', 'CHEQUE']
    },
    isPassed: {
        type: Boolean,
        default: false
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: [true, 'Entre le compte']
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

const AccountLine = mongoose.model("AccountLine", accountLineSchema);

module.exports = AccountLine;