const mongoose = require("mongoose");

const ApplySchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    service: {
        type: String,
        required: true,
        trim: true
    }
})

const Apply = mongoose.models.Apply || mongoose.model('Apply', ApplySchema);

module.exports = Apply;