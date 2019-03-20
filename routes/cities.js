const express = require('express')
const router = express.Router()
const City = require('../models/City')

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


module.exports = router
// cities route
/* app.get('/cities', (req, res, next) => {



    res.json({
        confirmation: 'success',
        data: 'this is the cities route'
    })
}) */