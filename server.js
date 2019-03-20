const express = require('express')
const mongoose = require('mongoose')
// 
const City = require('./models/City')
const Country = require('./models/Country')

// connect to MongoDB
// localhost would be 'mongodb://localhost/world'
// in Atlas
mongoose.connect('mongodb+srv://UUUPPP@SURVVEER.mongodb.net/world?retryWrites=true', { useNewUrlParser: true })
    .then(data => {
        console.log('mongo success')
    })
    .catch(err => {
        console.log('mongo failed' + err.message)
    })

const app = express()

//gettingstarted-shard-00-02-f6hrf.azure.mongodb.net:27017

// simple home route
// if app.use, then this route is middleware on all routes
app.get('/', (req, res, next) => {
    res.json({
        confirmation: 'success',
        data: 'This is the mongo project'
    })
})

// cities route
app.get('/cities', (req, res, next) => {

    // use mongoose api to 
    City.find(null)
        .then(cities => {
            res.json({
                confirmation: 'success in cities route',
                data: cities
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })

    /* res.json({
        confirmation: 'success',
        data: 'this is the cities route'
    }) */
})
// countries route
app.get('/countries', (req, res, next) => {
    // use mongoose api to 
    Country.find(null)
        .then(countries => {
            res.json({
                confirmation: 'success in countries route',
                data: countries
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail in countries route',
                message: err.message
            })
        })
})

//
app.listen(5000)
console.log('app running on 50000')