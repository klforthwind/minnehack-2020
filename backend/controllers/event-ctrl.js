const Event = require('../models/event-model').EventModel

createEvent = (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide name, location, info'
        })
    }

    const event = new Event(body)

    event
        .save()
        .then(() => {
            return res.status(201).json({
                success : true,
                event,
                message: "Event created!"
            })
        })
        .catch(err => {
            return res.status(400).json({
                error: err,
                message: "Event not created!"
            })
        })
}

updateEvent = async (req, res) => {

}

deleteEvent = async (req, res) => {

}

getEvents = async (req, res) => {

}

getEventByID = async (req, res) => {

}


module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventByID
}