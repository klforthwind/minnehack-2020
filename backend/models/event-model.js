const mongoose = require('mongoose')
const CoordinateSchema = require('./coordinate-model')
const Schema = mongoose.Schema

const EventSchema = new Schema(
    {
        name : {type: String, required: true},
        location : {type: CoordinateSchema, required: true},
        info : {type: String, required: true},
        id : {type: Number, required: true}
    },
    { timestamps : true}
)

module.exports = {
    EventModel: mongoose.model('events', EventSchema),
    EventSchema
}
