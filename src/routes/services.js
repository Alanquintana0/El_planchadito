const express = require('express');
const serviceSchema = require('../models/service');

const router = express.Router();

router.post('/services', (req, res) => {
    const service = serviceSchema(req.body);

    service.save().then((data)=> {
        res.json(data)
    }).catch((error)=>{
        res.json({
            message: err
        })
    });
});

router.get('/services', (req, res)=> {
    serviceSchema
    .find()
    .then((data)=> {
        res.json(data)
    })
    .catch((error)=>{
        res.json({
            message: error
        })
    });
});

router.put('/clients/:id', (req, res)=>{
    const { id } = req.params;
    const { clientId, numOfPants, numOfShirts, entryDate, exitDate, description } = req.body;
   
    serviceSchema
    .updateOne({_id: id}, {$set: {clientId, numOfPants, numOfShirts, entryDate, exitDate, description} })
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({
            message: error
        })
    })
})