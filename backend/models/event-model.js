const mongoose = require('mongoose')
const CoordinateSchema = require('./coordinate-model').CoordinateSchema
const Schema = mongoose.Schema

const EventSchema = new Schema(
    {
        name : {type: String, required: true},
        location : {type: CoordinateSchema, required: true},
        info : {type: String, required: true},
        creator: {type: Schema.Types.ObjectId, required:true, ref: 'users'},
        volunteers : {type: [Schema.Types.ObjectId], default: []},
        target_vol_count : {type: Number, required:true},
        current_vol_count : {type: Number, required:true},
        date : {type: Number, required: true}
    },
    { timestamps : true}
)

module.exports = {
    EventModel: mongoose.model('events', EventSchema),
    EventSchema
}
