// Basic Router Configuration
const express = require('express')
const router = express.Router()

// Load your other module here
router.get('/', (req, res) => {
    res.render('index')
})
// Here will be your request handling


module.exports = router