const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true},
        location: {type: CoordinateSchema, require: true},
        events: {type: [Event]},
    },
    { timestamps : true }
)

module.exports = mongoose.model('users', UserSchema)