const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    id: { type: Number },
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: false,
        default: 'No address provided'
    }
})
module.exports = mongoose.model('Client', clientSchema);