const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    heartrate: {
        type: Number,
        required: true
    },
    rainfall: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    temperature: {
        type: Number,
        required: true
    },
    City: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Data = mongoose.model('Data', infoSchema);

module.exports = Data;