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
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success : false,
            error: 'You must provide a body to update'
        })
    }

    Event.findOne({_id : req.params.id}, (err, event) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Event not found!'
            })
        }

        event.name = body.name
        event.location = body.location
        event.info = body.info
        event
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    _id: Event._id,
                    message: "Event updated!"
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Event not updated!'
                })
            })
    })
}

deleteEvent = async (req, res) => {
    // await Event.findOneAndDelete({ id: req.params.id})
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