const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    clientId: {
        type: String,
        required: true,
    },
    numOfPants: {
        type: Number,
        required: false,
    },
    numOfShirts: {
        type: Number,
        required: false,
    },
    entryDate:{
        type: Date,
        required: true
    },
    exitDate:{
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Service', serviceSchema);