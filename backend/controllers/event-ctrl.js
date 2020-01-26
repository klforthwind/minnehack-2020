const Event = require('../models/event-model')

createEvent = (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide name, location, info'
        })
    }

    const event = new Event(body)

    if (!event) {
        return res.status(400).json({ success:false, error: err})
    }

    event
        .save()
        .then(() => {
            return res.status(201).json({
                success : true,
                name : event.name,
                location : event.location,
                info : event.info,
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

deleteEvent = (req, res) => {

}

getEvents = (req, res) => {

}

getEventByID = (req, res) => {

}


module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventByID
}