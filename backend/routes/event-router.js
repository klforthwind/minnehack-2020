var express = require('express')
const EventCtrl = require('../controllers/event-ctrl')
var router = express.Router()

// router.post('/login', EventCtrl.login) 
router.post('/create', EventCtrl.createEvent) 
router.put('/update/:id', EventCtrl.updateEvent)

module.exports = router