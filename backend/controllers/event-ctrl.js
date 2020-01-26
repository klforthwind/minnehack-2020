const Event = require('../models/event-model').EventModel

createEvent = (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide name, location, info, and date'
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
        event.date = body.date
        event.target_vol_count = body.target_vol_count
        event.current_vol_count = body.current_vol_count
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
    await Event.findOneAndDelete({ _id: req.params.id}, (err, event) => {
        if (err) {
            return res.status(400).json({ success : false, error: err})
        }

        if (!event) {
            return res
                .status(404)
                .json({ success: false, error: 'Event not found' })
        }
        return res.status(200).json({ success : true, data : event})
    }).catch(err => console.log(err))
}

getEvents = async (req, res) => {
    await Event.find({}, (err, events) => {
        if (err) {
            return res.status(400).json({ success : false, error: err})
        }
        return res.status(200).json({ success : true, data : events})
    }).catch(err => console.log(err))
}

getEventByID = async (req, res) => {
    await Event.findOne({ _id : req.params.id}, (err, event) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Event not found!'
            })
        }

        if (!event) {
            return res
                    .status(404)
                    .json({ success : false, error : "Event not found!"})
        }
        return res.status(200).json({ success : true, data: event})
    }).catch(err => console.log(err))
}

getEventsByCreator = async (req, res) => {
    await Event.find({creator : req.params.creator}, (err, events) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Event not found!'
            })
        }

        return res.status(200).json({ success : true, data: events})
    }).catch(err => console.log(err))
}

getEventsByVolunteer = async (req, res) => {
    await Event.find({volunteers : req.params.volunteer}, (err, events) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Event not found!'
            })
        }

        return res.status(200).json({ success : true, data: events})
    }).catch(err => console.log(err))
}

addVolunteerToEvent = async (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success : false,
            error: 'Body must have a volunteer to add'
        })
    }

    await Event.findOne({_id : req.params.id}, (err, event) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Event not found!'
            })
        }

        if (!event) {
            return res
                    .status(404)
                    .json({ success : false, error : "Event not found!"})
        }
        event.volunteers.push(body.volunteer)
        
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

        return res.status(200).json({ success : true, data: event})
    }).catch(err => console.log(err))
}

removeVolunteerFromEvent = async (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success : false,
            error: 'Body must have volunteer to remove'
        })
    }

    await Event.findOne({_id : req.params.id}, (err, event) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Event not found!'
            })
        }

        if (!event) {
            return res
                    .status(404)
                    .json({ success : false, error : "Event not found!"})
        }
        event.volunteers.filter((elem) => {
            return body.volunteer !== elem._id;
        })

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
    }).catch(err => console.log(err))
}

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventByID,
    getEventsByCreator,
    getEventsByVolunteer,
    addVolunteerToEvent,
    removeVolunteerFromEvent
}
