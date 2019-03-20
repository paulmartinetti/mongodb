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

    /* res.json({
        confirmation: 'working',
        data: ' from countries.js router'
    }) */
})


module.exports = router