const express = require('express')
const clientSchema = require('../models/client')

const router = express.Router()

//Ruta post, crea un nuevo cliente, si no puede devuelve un mensaje de error
router.post('/clients', (req, res) => {
    const client = clientSchema(req.body);
    
    client.save().then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json({
            message: error
        })
    });
});

router.get('/clients', (req, res) => {
    clientSchema
    .find()
    .then((data) =>{
        res.json(data)
    })
    .catch((error) => {
        res.json({
            message: error
        })
    });
});

router.get('/clients/:id', (req, res) =>{
    const { id } = req.params;
    clientSchema
    .findById(id)
    .then((data) =>{
        res.json(data)
    })
    .catch((error) => {
        res.json({
            message: error
        })
    });
});

router.put('/clients/:id', (req, res) => {
    const { id } = req.params;
    const { name, lastName, phoneNumber, address } = req.body;
    clientSchema
    .updateOne({_id: id }, { $set: { name, lastName, phoneNumber, address } })
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.json({message: err})
    });
});

router.delete("/clients/:id", (req, res) => {
    const { id } = req.params;
    clientSchema
    .deleteOne({_id: id})
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.json({message: err})
    });
});

module.exports = router;