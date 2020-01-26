var express = require('express')
const EventCtrl = require('../controllers/event-ctrl')
var router = express.Router()

router.post('/create', EventCtrl.createEvent) 
router.put('/update/:id', EventCtrl.updateEvent)
router.get('/events', EventCtrl.getEvents)
router.get('/event/:id', EventCtrl.getEventByID)
router.get('/event/creator/:creator', EventCtrl.getEventsByCreator)
router.get('/event/volunteer/:volunteer', EventCtrl.getEventsByVolunteer)
router.put('/add_volunteer/:id', EventCtrl.addVolunteerToEvent)
router.put('/remove_volunteer/:id', EventCtrl.removeVolunteerFromEvent)
router.delete('/delete/:id', EventCtrl.deleteEvent)

module.exports = router