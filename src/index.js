const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const clientRoutes = require('./routes/clients');
const userRoutes = require('./routes/users');
const serviceRoutes = require('./routes/services')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api', clientRoutes);
app.use('api', serviceRoutes);
app.use('api', userRoutes);

app.get('/', (req, res)=>{
    res.send('El planchadito api');
})

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('DB ok')
}).catch((err)=>{
    console.log(err)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
