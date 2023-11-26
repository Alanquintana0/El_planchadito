const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    clientId: {
        type: String,
        required: false,
        default: 'Servicio con cliente no registrado'
    },
    numOfPants: {
        type: Number,
        required: false,
        default: 'No pantalones'
    },
    numOfShirts: {
        type: Number,
        required: false,
        default: 'No playeras'
    },
    entryDate:{
        type: Date,
        default: Date.now
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