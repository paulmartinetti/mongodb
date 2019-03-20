const express = require('express')
const router = express.Router()
const Country = require('../models/Country')

// countries route
router.get('/', (req, res, next) => {
    const query = req.query
    //console.log(req)
    // use mongoose api to 
    // manual filter test: Country.find({continent:'asia'})
    Country.find(query)
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

// syntax uri http://localhost:5000/countries/add?name=england&continent=europe&population=53
// syntax for demonstration, normally will come from 
router.get('/add', (req, res, next) => {
    const details = req.query
    // add new entry to the database using Promise
    Country.create(details)
    .then(country=>{
        res.json({
            confirmation: 'success country add create',
            data: country
        })
    })
    .catch(err=>{
        res.json({
            confirmation: 'fail in countries add create',
            message: err.message
        })
    })
})

// country id filter
// syntax uri http://localhost:5000/countries/5c9290179fc78b3674bd8ee2
router.get('/:id', (req, res, next) => {
    Country.findById(req.params.id)
        .then(country => {
            res.json({
                confirmation: 'success in countries id route',
                // called the payload
                data: country
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'country not found for id: ' + req.params.id + '.'
            })
        })
})

module.exports = router