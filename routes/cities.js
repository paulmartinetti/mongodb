const express = require('express')
const router = express.Router()
const City = require('../models/City')

// cities router
router.get('/', (req, res, next) => {
    // filter
    const query = req.query
    // use mongoose api to
    City.find(query)
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
})

// id path
router.get('/:id', (req, res, next) => {
    City.findById(req.params.id)
        .then(city => {
            res.json({
                confirmation: 'success in cities id route',
                // called the payload
                data: city
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'city not found for id: '+req.params.id+'.'
            })
        })
    /*  res.json({
         confirmation: 'success',
         data: 'from cities id '
     }) */
})


module.exports = router