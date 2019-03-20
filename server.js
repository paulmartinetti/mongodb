const express = require('express')
const mongoose = require('mongoose')

// connect to MongoDB
// localhost would be 'mongodb://localhost/world'
// in Atlas
mongoose.connect('mongodb+sUUUPPPDDDDBBBe.mongodb.net/world?retryWrites=true', { useNewUrlParser: true })
    .then(data => {
        console.log('mongo success')
    })
    .catch(err => {
        console.log('mongo failed' + err.message)
    })

const app = express()

// connect cities router
const cities = require('./routes/cities')
app.use('/cities', cities)

// connect countries router
const countries = require('./routes/countries')
app.use('/countries', countries)

// simple home route
// if app.use, then this route is middleware on all routes
app.get('/', (req, res, next) => {
    res.json({
        confirmation: 'success',
        data: 'This is the mongo project'
    })
})
//
app.listen(5000)
console.log('app running on 5000')