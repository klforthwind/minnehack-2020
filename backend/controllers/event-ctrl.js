const Event = require('../models/event-model')

createEvent = (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide name, location, info'
        })
    }

    const name = body.name
    const location = body.location
    const info = body.info
    console.log(name)
    console.log(location)
    console.log(body)

    return res.status(201).json({
        success : true
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