const mongoose = require('mongoose')
const CoordinateSchema = require('./coordinate-model').CoordinateSchema
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true},
        location: {type: CoordinateSchema, require: true},
        eventsImAttending: {type: [Schema.Types.ObjectId], default: [], ref: "events"},
        eventsImHosting: {type: [Schema.Types.ObjectId], default: [], ref: "events"}
    },
    { timestamps : true }
)

module.exports = {
    UserModel: mongoose.model('users', UserSchema),
    UserSchema
}