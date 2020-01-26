const mongoose = require('mongoose')
const CoordinateSchema = require('./coordinate-model').CoordinateSchema
const UserSchema = require('./user-model').UserSchema
const Schema = mongoose.Schema

const EventSchema = new Schema(
    {
        name : {type: String, required: true},
        location : {type: CoordinateSchema, required: true},
        info : {type: String, required: true},
        creator : {type: UserSchema, required:true},
        volunteers : {type: [UserSchema], default: []},
        target_vol_count : {type: Number, required:true},
        current_vol_count : {type: Number, required:true}
    },
    { timestamps : true}
)

module.exports = {
    EventModel: mongoose.model('events', EventSchema),
    EventSchema
}
