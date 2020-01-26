const mongoose = require('mongoose')
const CoordinateSchema = require('./coordinate-model').CoordinateSchema
const EventSchema = require('./event-model').EventSchema
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true},
        location: {type: CoordinateSchema, require: true},
        events: {type: [EventSchema]},
    },
    { timestamps : true }
)

module.exports = {
    UserModel : mongoose.model('users', UserSchema),
    UserSchema
}