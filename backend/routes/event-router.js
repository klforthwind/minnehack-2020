var express = require('express')
const EventCtrl = require('../controllers/event-ctrl')
var router = express.Router()

// router.post('/login', EventCtrl.login) 
router.post('/create', EventCtrl.createEvent) 

module.exports = router