var express = require('express')
var router = express.Router()

// define the home page route
router.post('/login', (req, res) => {
    req.
    res.send('Birds home page')
})
// define the about route
router.post('/create', (req, res) => {
    res.send('About birds')
})

module.exports = router