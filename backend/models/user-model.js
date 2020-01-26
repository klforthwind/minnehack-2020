const mongoose = require('mongoose')
const CoordinateSchema = require('./coordinate-model')
const EventSchema = require('./event-model')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true},
        location: {type: Number, require: true},
        events: {type: [Number]},
    },
    { timestamps : true }
)

module.exports = mongoose.model('users', UserSchema)