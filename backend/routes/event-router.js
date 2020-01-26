var express = require('express')
var router = express.Router()

router.post('/login', EventCtrl.login) 
router.put('/event', EventCtrl.updateEvent) 

module.exports = router